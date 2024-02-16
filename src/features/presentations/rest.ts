import express from 'express';
import {
    convertQueriesToFilter,
} from '../../utils';
import { GetOneByFilter } from '../usecases/get-one-by-filter';

export const routerTest = express.Router();

// invoked for any requests passed to this router
routerTest.use(function (req, res, next) {
    // .. some logic here .. like any other middleware
    next();
});

routerTest.get('/', async function (req, res, next) {
    //validate

    //convert
    const fieldFilter = convertQueriesToFilter(req.query);

    //use case
    const usecase = new GetOneByFilter();
    const users = await usecase.processing(fieldFilter);

    res.send(users);
});

