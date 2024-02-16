import { FieldFilterConfiguration } from "./types/field.type";

export const NameField: FieldFilterConfiguration = {
    operators: [],
    name: 'name',
    table: {
        field: 'name',
        name: 'users',
    },
    alias: 'name',
};
