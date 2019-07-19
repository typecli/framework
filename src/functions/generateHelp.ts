import { Memoize } from '@typescript-plus/fast-memoize-decorator';
import * as Case from 'case';
import * as pluralize from 'pluralize';
import { ArgumentModelType, OptionArrayModelType, OptionModelType } from '../classes/AttributeModel';
import { AttributeModelOptions_required } from '../classes/AttributeModelOptions';
import { ContextSpec } from '../classes/ContextSpec';
import { ContextClassType } from '../types';
import { WORLD } from '../world';

// tslint:disable:max-classes-per-file

class HeadAndBody<T extends ArgumentModelType | OptionModelType | OptionArrayModelType> {
  constructor(public model: T, public head: string, public body: string) {}

  @Memoize()
  get headLines() {
    return this.head.split('\n');
  }

  @Memoize()
  get bodyLines() {
    return this.body.split('\n');
  }
}

class HeadsAndBodies<T extends ArgumentModelType | OptionModelType | OptionArrayModelType> {
  data: HeadAndBody<T>[] = [];

  @Memoize()
  get maxHeadLength() {
    return Math.max(...this.data.map(e => Math.max(...e.headLines.map(e2 => e2.length))));
  }

  render() {
    const buf: string[] = [];
    const sorted = this.data.sort((a, b) => a.head.localeCompare(b.head));
    sorted.forEach(hnb => {
      const headLines = hnb.headLines.slice();
      const bodyLines = hnb.bodyLines.slice();
      const defaultValue = (hnb.model as { defaultValue: any }).defaultValue;
      if (defaultValue !== undefined) {
        bodyLines.push(`(default: ${defaultValue})`);
      }
      const maxLines = Math.max(headLines.length, bodyLines.length);
      for (let i = 0; i < maxLines; ++i) {
        const headLine = headLines[i] as string | undefined;
        const bodyLine = bodyLines[i] as string | undefined;
        let line =
          headLine === undefined ? `  ${' '.repeat(this.maxHeadLength)}` : `  ${headLine.padEnd(this.maxHeadLength)}`;
        if (bodyLine !== undefined) {
          line = `${line}  ${bodyLine}`;
        }
        buf.push(line);
      }
    });
    return buf.join('\n');
  }
}

class Builder {
  static build(contextSpec: ContextSpec) {
    const builder = new Builder(contextSpec);
    return builder;
  }

  constructor(public contextSpec: ContextSpec) {}

  @Memoize()
  get argumentsContent() {
    const list = new HeadsAndBodies();
    this.contextSpec.arguments.forEach(arg => {
      const desc = arg.description;
      if (desc !== undefined) {
        const head = arg.variableName;
        list.data.push(new HeadAndBody(arg, head, desc));
      }
    });
    return list.render();
  }

  @Memoize()
  get data() {
    return this.contextSpec.helpData;
  }

  @Memoize()
  get footer() {
    const data = this.data;
    return data ? data.options.footer : undefined;
  }

  @Memoize()
  get header() {
    const data = this.data;
    return data ? data.options.header : undefined;
  }

  @Memoize()
  get optionIsOptional() {
    return !this.contextSpec.options.every(e => (e.options as AttributeModelOptions_required).required === true);
  }

  @Memoize()
  get optionsContent() {
    const list = new HeadsAndBodies();
    this.contextSpec.options.forEach(option => {
      const desc = option.description;
      if (desc !== undefined) {
        let head = option.optionNames.sort().join(', ');
        const negatedOptionNames = ((option as unknown) as { negatedOptionNames: string[] | undefined })
          .negatedOptionNames;
        if (negatedOptionNames !== undefined && negatedOptionNames.length > 0) {
          head = `${head} (not: ${negatedOptionNames.join(', ')})`;
        }
        list.data.push(new HeadAndBody(option, head, desc));
      }
    });
    return list.render();
  }

  @Memoize()
  get subcommandsContent() {
    const buf: string[] = [];
    const context = WORLD.contextSpecs.get(this.contextSpec.klass);
    if (context) {
      const sorted = context.subspecs
        .filter(e => e.caption !== undefined)
        .sort((a, b) => a.commandName.localeCompare(b.commandName));
      const maxHeadLength = Math.max(...sorted.map(e => e.commandName.length));
      sorted.forEach(e => {
        buf.push(`  ${e.commandName.padEnd(maxHeadLength)}  ${e.caption}`);
      });
    }
    return buf.join('\n');
  }

  @Memoize()
  get text() {
    const buf: string[] = [];
    buf.push(this.title);
    if (this.header !== undefined) {
      buf.push('');
      buf.push(this.header);
    }
    if (this.subcommandsContent.length > 0) {
      buf.push('');
      buf.push('Subcommands:');
      buf.push(this.subcommandsContent);
    }
    if (this.argumentsContent.length > 0) {
      buf.push('');
      buf.push('Arguments:');
      buf.push(this.argumentsContent);
    }
    if (this.optionsContent.length > 0) {
      buf.push('');
      buf.push('Options:');
      buf.push(this.optionsContent);
    }
    if (this.footer !== undefined) {
      buf.push('');
      buf.push(this.footer);
    }
    return buf.join('\n');
  }

  @Memoize()
  get title() {
    const buf: string[] = [];
    const name = Case.kebab(this.contextSpec.commandName);
    buf.push(name);
    if (this.contextSpec.options.size > 0) {
      if (this.optionIsOptional) {
        buf.push('[OPTIONS]');
      } else {
        buf.push('OPTIONS');
      }
    }
    this.contextSpec.arguments.forEach(e => {
      if ((e.options as AttributeModelOptions_required).required) {
        buf.push(e.variableName);
      } else {
        buf.push(`[${e.variableName}]`);
      }
    });
    if (this.contextSpec.subspecs.length > 0) {
      buf.push('SUBCOMMAND');
    }
    const variadic = this.contextSpec.variadicArguments;
    if (variadic) {
      const variadicName = Case.constant(pluralize.singular(variadic.key));
      const min = variadic.minimumElementCount;
      let index = 0;
      if (min !== undefined) {
        for (; index < min; ++index) {
          buf.push(`${variadicName}${index + 1}`);
        }
      }
      // tslint:disable-next-line:no-magic-numbers
      buf.push(`[${variadicName}${index + 1} ${variadicName}${index + 2}...]`);
    }
    const terminator = this.contextSpec.terminator;
    if (terminator) {
      buf.push(`${terminator.terminatorKeywords[0]} ...`);
    }
    return buf.join(' ');
  }
}

export function generateHelp(contextClass: ContextClassType) {
  return Builder.build(WORLD.getContextSpecOfClass(contextClass)).text;
}
