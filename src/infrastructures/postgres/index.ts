import knex from 'knex';

export const postgresKnexConfig = {
    client: 'pg',
    connection: {
        host: process.env.POSTGRES_HOST,
        port: process.env.POSTGRES_PORT,
        user: process.env.POSTGRES_USERNAME,
        password: process.env.POSTGRES_PASSWORD,
        database: 'postgres',
    },
};

export const databaseClient = knex(postgresKnexConfig);
