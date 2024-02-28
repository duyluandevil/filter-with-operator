export enum OperatorEnum {
    EQUAL = 'eq',
    NOT_EQUAL = 'neq',
    GREATER_THAN = 'gt',
    LESS_THAN = 'lt',
    GREATER_THAN_OR_EQUAL = 'gte',
    LESS_THAN_OR_EQUAL = 'lte',
    IS = 'is',
    IS_NOT = 'isnot',

    AND_EQUAL = 'a:eq',
    AND_NOT_EQUAL = 'a:neq',
    AND_NULL = 'a:null',
    AND_NOT_NULL = 'a:null',
    AND_LESS_THAN = 'a:lt',
    AND_LESS_THAN_OR_EQUAL = 'a:lte',
    AND_GREATER_THAN = 'a:gt',
    AND_GREATER_THAN_OR_EQUAL = 'a:gte',
    AND_START_WITH = 'a:sw',
    AND_END_WITH = 'a:ew',
    AND_CONTAIN = 'a:ct',
    AND_IS = 'a:is',
    AND_IS_NOT = 'a:isnot',

    OR_EQUAL = 'o:eq',
    OR_NOT_EQUAL = 'o:neq',
    OR_NULL = 'o:null',
    OR_NOT_NULL = 'o:null',
    OR_LESS_THAN = 'o:lt',
    OR_LESS_THAN_OR_EQUAL = 'o:lte',
    OR_GREATER_THAN = 'o:gt',
    OR_GREATER_THAN_OR_EQUAL = 'o:gte',
    OR_START_WITH = 'o:sw',
    OR_END_WITH = 'o:ew',
    OR_CONTAIN = 'o:ct',
    OR_IS = 'o:is',
    OR_IS_NOT = 'o:isnot'
}
export const OPERATOR = Object.entries(OperatorEnum);

export enum LogicalEnum {
    AND = 'and',
    OR = 'or',
}
export const LOGICAL = {};
Object.values(LogicalEnum).forEach((value) => (LOGICAL[value] = value));

export enum ComparisonEnum {
    EQUAL = '=',
    NOT_EQUAL = '!=',
    GREATER_THAN = '>',
    LESS_THAN = '<',
    GREATER_THAN_OR_EQUAL = '>=',
    LESS_THAN_OR_EQUAL = '<=',
}
export const COMPARISON = Object.entries(ComparisonEnum);


export enum ConditionalEnum {
    IS = 'in',
    IS_NOT = 'not in',
}
export const CONDITIONAL = Object.entries(ConditionalEnum);


