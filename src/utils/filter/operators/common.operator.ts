import { COMPARISON, ComparisonEnum, OperatorEnum } from './type.operator';

export const convertOperatorToComparison = (operator: OperatorEnum) => {
    let comparison: string = '=';

    switch (operator) {
        case OperatorEnum.EQUAL:
            comparison = ComparisonEnum.EQUAL;
            break;
    }

    return comparison;
};
