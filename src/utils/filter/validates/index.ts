import { FIELD_USE_FILTER } from '../fields';

export const validateQueriesForFiltering = (queries: any) => {
    const availableFieldUsesFilter = FIELD_USE_FILTER;

    const fieldInRest = [];
    Object.entries(queries).forEach(([field, operation]) => {
        if (availableFieldUsesFilter[field]) console.log(field, operation);
    });
};

