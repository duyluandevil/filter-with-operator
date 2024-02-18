import {
    FieldFilter,
    execFilter,
} from '../../../utils';
import { databaseClient } from '.';

export class UsersDao {
    constructor() {}

    public getUsers(filter?: any) {
        const query = databaseClient.select().from('users');

        // addFiltering(query, filter);

        execFilter(query, filter as any);
        console.log(query.toQuery());

        return query;
    }
}
