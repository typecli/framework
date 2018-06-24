import { Memoize } from '@typescript-plus/fast-memoize-decorator';
import * as Case from 'case';
import * as pluralize from 'pluralize';
import {
  AttributeModelOptions_default, AttributeModelOptions_desc, AttributeModelOptions_min, AttributeModelOptions_name,
  AttributeModelOptions_variableName
} from '../AttributeModelOptions';

// tslint:disable:max-classes-per-file

// tslint:disable-next-line:class-name
export abstract class AttributeModel_defaultValue {
  abstract options: AttributeModelOptions_default;

  get defaultValue() {
    return this.options.default;
  }
}

// tslint:disable-next-line:class-name
export abstract class AttributeModel_description {
  abstract options: AttributeModelOptions_desc;

  get description() {
    return this.options.desc;
  }
}

// tslint:disable-next-line:class-name
export abstract class AttributeModel_minimumElementCount {
  abstract options: AttributeModelOptions_min;

  get minimumElementCount() {
    return this.options.min;
  }
}

// tslint:disable-next-line:class-name
export abstract class AttributeModel_optionArrayNames {
  abstract key: string;
  abstract options: AttributeModelOptions_name;

  @Memoize()
  get optionNames() {
    const names = this.options.name;
    if (names) {
      return names;
    }
    const name = pluralize.singular(this.key);
    return [name.length === 1 ? `-${name}` : `--${name}`];
  }
}

// tslint:disable-next-line:class-name
export abstract class AttributeModel_variableName {
  abstract key: string;
  abstract options: AttributeModelOptions_variableName;

  @Memoize()
  get variableName() {
    const name = this.options.variableName;
    return name !== undefined ? name : Case.constant(this.key);
  }
}
