import express from 'express';
import { GetOneByFilter } from '../usecases/get-one-by-filter';

export const routerTest = express.Router();

// invoked for any requests passed to this router
routerTest.use(function (req, res, next) {
    // .. some logic here .. like any other middleware
    next();
});

routerTest.get('/', async function (req, res, next) {
    //read more data test in folder mock
    //complex filter
    const filter = {
        or: [
            {
                and: [
                    {
                        name: {
                            eq: 1,
                        },
                    },
                    {
                        id: {
                            eq: 2,
                        },
                    },
                    {
                        or: [
                            {
                                and: [
                                    {
                                        name: {
                                            eq: 1,
                                        },
                                    },
                                    {
                                        id: {
                                            eq: 2,
                                        },
                                    },
                                ],
                            },
                            {
                                id: {
                                    eq: 2,
                                },
                            },
                            {
                                or: [{ name: { eq: 1 } }, { id: { eq: 1 } }],
                            },
                        ],
                    },
                ],
            },
            {
                id: {
                    eq: 1,
                },
            },
        ],
    };

    //use case
    const usecase = new GetOneByFilter();
    const users = await usecase.processing(filter);

    res.send(users);
});
