import { Knex } from 'knex';
import { LogicalEnum, OperatorEnum } from './type.operator';
import { CompareValue } from '../types/compare-value.type';
import { addComparisonOperator } from './comparison.operator';

export const execOperator = (
    rootQuery: Knex.QueryBuilder,
    operatorContext: {
        operator: OperatorEnum;
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
    const { compareValue, logical, operator } = operatorContext;

    switch (operator) {
        case OperatorEnum.LESS_THAN:
        case OperatorEnum.LESS_THAN_OR_EQUAL:
        case OperatorEnum.GREATER_THAN:
        case OperatorEnum.GREATER_THAN_OR_EQUAL:
        case OperatorEnum.NOT_EQUAL:
        case OperatorEnum.EQUAL:
        case OperatorEnum.AND_LESS_THAN:
        case OperatorEnum.AND_LESS_THAN_OR_EQUAL:
        case OperatorEnum.AND_GREATER_THAN:
        case OperatorEnum.AND_GREATER_THAN_OR_EQUAL:
        case OperatorEnum.AND_NOT_EQUAL:
        case OperatorEnum.AND_EQUAL:
            addComparisonOperator(
                rootQuery,
                {
                    compareValue: compareValue,
                    operator: operator,
                    logical: logical,
                },
                tableContext
            );
            break;
    }

    return rootQuery;
};
