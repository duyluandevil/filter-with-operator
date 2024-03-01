import { BaseField } from './base.field';
import { FieldFilterConfiguration } from './types/field.type';

export const IdField: FieldFilterConfiguration = {
    operators: [],
    name: 'id',
    table: {
        field: 'id',
        name: 'users',
    },
    alias: 'id',
};

export class IdField2 extends BaseField {
    constructor() {
        super({
            operators: [],
            name: 'id',
            table: {
                field: 'id',
                name: 'users',
            },
            alias: 'id',
            raw: undefined
        });
    }
}
