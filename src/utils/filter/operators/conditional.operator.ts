import { Knex } from 'knex';
import { LogicalEnum, OperatorEnum } from './type.operator';
import { addLogicalOperator } from './logical.operator';
import { convertOperatorToComparison } from './common.operator';
import { CompareValue } from '../types';
import { OperatorContext, TableContext } from '..';

export const addConditionalOperator = (
    rootQuery: Knex.QueryBuilder,
    operatorContext: OperatorContext,
    tableContext: TableContext,
    context?: {}
) => {
    const {operator, logical, compareValue} = operatorContext;
    const { table, raw } = tableContext;
  
    rootQuery = addLogicalOperator(rootQuery, logical);

    switch (operator){}
    
    return rootQuery;
};
