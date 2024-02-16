import express, { Express, Request, Response } from 'express';
import { logAllEndpoint, port } from './features';
import { routerTest } from './features/presentations/rest';
import { FIELD_USE_FILTER, execFileStoresInFolder } from './utils/filter/fields';

export const app: Express = express();

app.use('/test', routerTest);

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});


logAllEndpoint(app);

// execFileStoresInFolder();