import { FieldFilter } from '..';

//will use for logical with recursive
export const convertQueriesToFilter = (queries: any) => {
    const fieldFilterArr: FieldFilter[] = [];
    const queryObjectArr = Object.entries(queries);

    queryObjectArr.forEach(([field, operation]) => {
        console.log({ field, operation });
        Object.entries(operation).forEach(([operator, compareValue]) => {
            fieldFilterArr.push({
                field: field,
                context: {
                    operatorContext: {
                        compareValue: compareValue,
                        operator: operator as any,
                    },
                },
            });
        });
    });

    return fieldFilterArr;
};
