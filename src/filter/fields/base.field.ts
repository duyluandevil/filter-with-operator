import { OperatorEnum } from '../operators';

export class BaseField {
    private _operators: OperatorEnum[];
    private _name: string;
    private _table: {
        field: string;
        name: string;
    };
    private _alias: string | undefined;
    private _raw: string | undefined;

    constructor({
        operators,
        name,
        table,
        alias,
        raw,
    }: {
        operators: OperatorEnum[];
        name: string;
        table: {
            field: string;
            name: string;
        };
        alias: string | undefined;
        raw: string | undefined;
    }) {
        this._operators = operators;
        this._name = name;
        this._table = table;
        this._alias = alias;
        this._raw = raw;
    }

    get operators() {
        return this._operators;
    }
    get name() {
        return this._name;
    }
    get table() {
        return this._table;
    }
    get alias() {
        return this._alias;
    }
    get raw() {
        return this._raw;
    }
}
