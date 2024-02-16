import { Knex } from 'knex';
import { LogicalEnum, OperatorEnum, execOperator } from './operators';
import { CompareValue } from './types';
import { FIELD_USE_FILTER } from './fields';

export type FieldFilter = {
    field: string;
    context: FilterContextParameter;
};

export type FilterContextParameter = {
    operatorContext: OperatorContext;
    tableContext?: TableContext;
};

export type TableContext = {
    table?: {
        field: string;
        name: string;
    };
    raw?: string;
};

export type OperatorContext = {
    operator: OperatorEnum;
    logical?: LogicalEnum;
    compareValue: CompareValue;
};

//for multiple Field
export const addFiltering = (
    rootQuery: Knex.QueryBuilder,
    fieldFilter: FieldFilter[]
) => {
    if (fieldFilter && fieldFilter.length > 0)
        fieldFilter.forEach((f) =>
            execFilterToField(f.field, rootQuery, f.context)
        );
    else 
        console.warn('List of Filter of Field is empty');

    return rootQuery;
};

// for single field
export const execFilterToField = (
    field: string,
    rootQuery: Knex.QueryBuilder,
    context: FilterContextParameter
) => {
    const fieldFilterFunction = FIELD_USE_FILTER[field];

    const tableContext: TableContext = {
        raw: context?.tableContext?.raw ?? fieldFilterFunction['raw'],
        table: context?.tableContext?.table ?? fieldFilterFunction['table']
    }
    
    execOperator(rootQuery, context.operatorContext, tableContext)
    return rootQuery;
};

export * from './validates';
