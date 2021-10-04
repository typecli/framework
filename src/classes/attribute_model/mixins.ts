import { Memoize } from '@typescript-plus/fast-memoize-decorator';
import * as Case from 'case';
import * as pluralize from 'pluralize';
import { ConstructorType } from '../../types';
import {
  AttributeModel_arrayOptionNames,
  AttributeModel_defaultValue,
  AttributeModel_description,
  AttributeModel_minimumElementCount,
  AttributeModel_optionNames,
} from './member_types';
import {
  AttributeModelOption_default,
  AttributeModelOption_desc,
  AttributeModelOption_min,
  AttributeModelOption_name,
  AttributeModelOption_variableName,
} from './option_member_types';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function AttributeModelMixin_defaultValue<BaseT extends ConstructorType>(base: BaseT) {
  abstract class AttributeModelMixin_defaultValue extends base implements AttributeModel_defaultValue {
    abstract options: AttributeModelOption_default;

    get defaultValue(): unknown {
      return this.options.default;
    }
  }
  return AttributeModelMixin_defaultValue;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function AttributeModelMixin_description<BaseT extends ConstructorType>(base: BaseT) {
  abstract class AttributeModelMixin_description extends base implements AttributeModel_description {
    abstract options: AttributeModelOption_desc;

    get description(): string | undefined {
      return this.options.desc;
    }
  }
  return AttributeModelMixin_description;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function AttributeModelMixin_minimumElementCount<BaseT extends ConstructorType>(base: BaseT) {
  abstract class AttributeModelMixin_minimumElementCount extends base implements AttributeModel_minimumElementCount {
    abstract options: AttributeModelOption_min;

    get minimumElementCount(): number | undefined {
      return this.options.min;
    }
  }
  return AttributeModelMixin_minimumElementCount;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function AttributeModelMixin_arrayOptionNames<BaseT extends ConstructorType>(base: BaseT) {
  abstract class AttributeModelMixin_arrayOptionNames extends base implements AttributeModel_arrayOptionNames {
    abstract key: string;
    abstract options: AttributeModelOption_name;

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
  return AttributeModelMixin_arrayOptionNames;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function AttributeModelMixin_variableName<BaseT extends ConstructorType>(base: BaseT) {
  abstract class AttributeModelMixin_variableName extends base implements AttributeModelOption_variableName {
    abstract key: string;
    abstract options: AttributeModelOption_variableName;

    @Memoize()
    get variableName(): string {
      const name = this.options.variableName;
      return name !== undefined ? name : Case.constant(this.key);
    }
  }
  return AttributeModelMixin_variableName;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function AttributeModelMixin_optionNames<BaseT extends ConstructorType>(base: BaseT) {
  abstract class AttributeModelMixin_optionNames extends base implements AttributeModel_optionNames {
    abstract key: string;
    abstract options: AttributeModelOption_name;

    @Memoize()
    get optionNames(): string[] {
      const names = this.options.name;
      if (Array.isArray(names)) {
        return names;
      }
      if (names !== undefined) {
        return [names];
      }
      const name = this.key;
      return [name.length === 1 ? `-${name}` : `--${Case.kebab(name)}`];
    }
  }
  return AttributeModelMixin_optionNames;
}
