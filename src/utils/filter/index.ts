import { Knex } from 'knex';
import {
    LOGICAL,
    LogicalEnum,
    OperatorEnum,
    addLogicalOperator,
    execOperator,
} from './operators';
import { CompareValue } from './types';
import { FIELD_USE_FILTER } from './fields';

export type FieldFilter = Record<string, LogicalFilterValueType>;

export type LogicalFilterValueType = Record<LogicalEnum, FieldFilterValueType>

export type FieldFilterValueType = Record<string, Record<OperatorEnum, CompareValue>>

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


// for single field
export const execFilterToField = (
    field: string,
    rootQuery: Knex.QueryBuilder,
    context: FilterContextParameter
) => {
    const fieldFilterFunction = FIELD_USE_FILTER[field];

    const tableContext: TableContext = {
        raw: context?.tableContext?.raw ?? fieldFilterFunction['raw'],
        table: context?.tableContext?.table ?? fieldFilterFunction['table'],
    };

    execOperator(rootQuery, context.operatorContext, tableContext);
    return rootQuery;
};


export const execFilter = (
    rootQuery: Knex.QueryBuilder,
    filter: any,
    logical?: LogicalEnum
) => {
    //filter always is object
    for (const [key, operation] of Object.entries(filter)) {
        //is key logical?
        if (LOGICAL[key]) {
            //if key is logical, the value of logical always is array
            if (Array.isArray(operation)) {
                for (let i = 0; i < operation.length; i++) {
                    const subKey = Object.keys(operation[i])[0];

                    //if subKey is also Logical, call execFilter for handling Logical
                    if (LOGICAL[subKey]) {
                        addLogicalOperator(rootQuery, LOGICAL[subKey]).where(
                            (sub) => {
                                execFilter(sub, operation[i], LOGICAL[subKey]);
                            }
                        );
                    //if not Logical, exec operator for query
                    } else {
                        execFilterToField(
                            Object.keys(operation[i])[0],
                            rootQuery,
                            {
                                operatorContext: {
                                    compareValue: Object.values(
                                        Object.values(operation[i])[0]
                                    )[0],
                                    operator: Object.keys(
                                        Object.values(operation[i])[0]
                                    )[0] as OperatorEnum,
                                    logical: LOGICAL[key],
                                },
                            }
                        );
                    }
                }
            } else {
                throw new Error('Value of Logical is always Array');
            }
        }
        //if not Logical, exec operator for query
        else {
            execFilterToField(key, rootQuery, {
                operatorContext: {
                    compareValue: Object.values(operation)[0],
                    operator: Object.keys(operation)[0] as OperatorEnum,
                },
            });
        }
    }
};

export * from './validates';
