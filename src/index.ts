import { execFilter } from './filter';
import { filter1 } from './filter';
import { databaseClient } from './infrastructures';

const query = databaseClient.select('').from('user');
execFilter(query, filter1);

console.log(query.toQuery());
