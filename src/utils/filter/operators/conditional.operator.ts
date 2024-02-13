import { Knex } from 'knex';
import { LogicalEnum, OperatorEnum } from './type.operator';
import { addLogicalOperator } from './logical.operator';
import { convertOperatorToComparison } from './common.operator';
import { CompareValue } from '../types';

export const addConditionalOperator = (
    rootQuery: Knex.QueryBuilder,
    operatorContext: {
        operator: OperatorEnum | undefined;
        logical?: LogicalEnum;
        compareValue: CompareValue;
    },
    tableContext: {
        table?: {
            field: string;
            name: string;
        };
        raw?: string;
    },
    context?: {}
) => {
    const {operator, logical, compareValue} = operatorContext;
    const { table, raw } = tableContext;
  
    rootQuery = addLogicalOperator(rootQuery, logical);

    switch (operator){}
    
    return rootQuery;
};
