import { COMPARISON, ComparisonEnum, OperatorEnum } from './type.operator';

export const convertOperatorToComparison = (operator: OperatorEnum) => {
    let comparison: string = '=';

    switch (operator) {
        case OperatorEnum.EQUAL:
            comparison = ComparisonEnum.EQUAL;
            break;
        case OperatorEnum.NOT_EQUAL:
            comparison = ComparisonEnum.NOT_EQUAL;
            break;
    }

    return comparison;
};
