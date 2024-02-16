import {
    FieldFilter,
    addFiltering,
} from '../../../utils';
import { databaseClient } from '.';

export class UsersDao {
    constructor() {}

    public getUsers(filter?: FieldFilter[]) {
        const query = databaseClient.select().from('users');

        addFiltering(query, filter);
        console.log(query.toQuery());

        return query;
    }
}
