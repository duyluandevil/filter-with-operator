import { Knex } from 'knex';
import { OperatorEnum } from '../../operators';
import { FIELD_USE_FILTER } from '..';

//the name only accepts file name property in folder fields, but below code is not true
type FieldName = keyof typeof FIELD_USE_FILTER;

export type FieldFilterConfiguration = {
    operators: OperatorEnum[], // for validate
    name: FieldName,
    table: {
        field: string,
        name: string
    },
    alias?: string
}
