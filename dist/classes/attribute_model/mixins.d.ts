import { AttributeModelOptions_default, AttributeModelOptions_desc, AttributeModelOptions_min, AttributeModelOptions_name, AttributeModelOptions_variableName } from '../AttributeModelOptions';
export declare abstract class AttributeModel_defaultValue {
    abstract options: AttributeModelOptions_default;
    readonly defaultValue: any;
}
export declare abstract class AttributeModel_description {
    abstract options: AttributeModelOptions_desc;
    readonly description: string | undefined;
}
export declare abstract class AttributeModel_minimumElementCount {
    abstract options: AttributeModelOptions_min;
    readonly minimumElementCount: number | undefined;
}
export declare abstract class AttributeModel_optionArrayNames {
    abstract key: string;
    abstract options: AttributeModelOptions_name;
    readonly optionNames: string[];
}
export declare abstract class AttributeModel_variableName {
    abstract key: string;
    abstract options: AttributeModelOptions_variableName;
    readonly variableName: string;
}
