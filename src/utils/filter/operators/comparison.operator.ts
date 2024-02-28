import { Knex } from 'knex';
import { LogicalEnum, OperatorEnum } from './type.operator';
import { addLogicalOperator } from './logical.operator';
import { convertOperatorToComparison } from './common.operator';
import { CompareValue } from '../types/compare-value.type';
import { FilterContextParameter, OperatorContext, TableContext } from '..';

export const addComparisonOperator = (
    rootQuery: Knex.QueryBuilder,
    operatorContext: OperatorContext,
    tableContext: TableContext,
    context?: {}
) => {
    const { table, raw } = tableContext;
    const { operator, logical, compareValue } = operatorContext;
    const comparison = convertOperatorToComparison(
        operator ?? OperatorEnum.EQUAL
    );

    rootQuery = addLogicalOperator(rootQuery, logical);

    if (raw) rootQuery.whereRaw(`${raw} ${comparison} ?`, compareValue);
    else
        rootQuery.where(
            `${table?.name}.${table?.field}`,
            comparison,
            compareValue
        );

    return rootQuery;
};
