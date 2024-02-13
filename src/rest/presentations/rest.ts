import { app } from '../..';
import express, { Express, Request, Response } from 'express';

export const routerTest = express.Router();

// invoked for any requests passed to this router
routerTest.use(function (req, res, next) {
    // .. some logic here .. like any other middleware
    next();
});

routerTest.get('/', function (req, res, next) {
    res.send('/');
});

routerTest.get('/2', function (req, res, next) {
    res.send('Test 2');
});
