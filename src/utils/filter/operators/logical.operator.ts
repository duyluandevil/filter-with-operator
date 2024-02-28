import { Knex } from 'knex';
import { LogicalEnum } from './type.operator';

export const addLogicalOperator = (
    rootQuery: Knex.QueryBuilder,
    logical: LogicalEnum | undefined = LogicalEnum.AND
) => {
    if (!logical || logical === LogicalEnum.AND) rootQuery.and;
    else rootQuery.or;

    return rootQuery;
};
