import { FieldFilterConfiguration } from "./types/field.type";

export const IdField: FieldFilterConfiguration = {
    operators: [],
    name: 'id',
    table: {
        field: 'id',
        name: 'users'
    },
    alias: 'id'
}
