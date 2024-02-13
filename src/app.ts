import express, { Express, Request, Response } from 'express';
import { logAllEndpoint, port } from './rest';
import { routerTest } from './rest/presentations/rest';
// import { rest } from './rest/presentations/rest';

export const app: Express = express();

app.use('/test', routerTest);

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});


logAllEndpoint(app);