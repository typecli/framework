import { Memoize } from '@typescript-plus/fast-memoize-decorator';
import * as Case from 'case';
import * as pluralize from 'pluralize';
import {
  AttributeModelOptions_default,
  AttributeModelOptions_desc,
  AttributeModelOptions_min,
  AttributeModelOptions_name,
  AttributeModelOptions_variableName,
} from '../AttributeModelOptions';

export abstract class AttributeModel_defaultValue {
  abstract options: AttributeModelOptions_default;

  get defaultValue(): unknown {
    return this.options.default;
  }
}

export abstract class AttributeModel_description {
  abstract options: AttributeModelOptions_desc;

  get description(): string | undefined {
    return this.options.desc;
  }
}

export abstract class AttributeModel_minimumElementCount {
  abstract options: AttributeModelOptions_min;

  get minimumElementCount(): number | undefined {
    return this.options.min;
  }
}

export abstract class AttributeModel_optionArrayNames {
  abstract key: string;
  abstract options: AttributeModelOptions_name;

  @Memoize()
  get optionNames(): string[] {
    const names = this.options.name;
    if (Array.isArray(names)) {
      return names;
    }
    if (names !== undefined) {
      return [names];
    }
    const name = pluralize.singular(this.key);
    return [name.length === 1 ? `-${name}` : `--${name}`];
  }
}

export abstract class AttributeModel_variableName {
  abstract key: string;
  abstract options: AttributeModelOptions_variableName;

  @Memoize()
  get variableName(): string {
    const name = this.options.variableName;
    return name !== undefined ? name : Case.constant(this.key);
  }
}
