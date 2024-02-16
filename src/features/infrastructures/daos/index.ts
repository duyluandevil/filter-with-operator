import knex from "knex";
import { postgresKnexConfig } from "../../../infrastructures";

export const databaseClient = require('knex')(postgresKnexConfig);