import express, { Express, Request, Response } from 'express';

export const logAllEndpoint = (app: Express) => {
    const routesRaw = [];
    app._router.stack.forEach(function (r) {
        if (r.handle.stack) {
            routesRaw.push(...r.handle.stack);
        }
    });

    const routesClean = [];
    routesRaw.forEach((r) => {
        // console.log(r)
        if (r.route && r.route?.stack) {

        const route = {
                method: r.route.stack[0].method,
                path: r.route.path
        }
            
            routesClean.push(route);
        }
    });

    console.table(routesClean);
};
