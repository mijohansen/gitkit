import express, { type Express } from 'express';
import * as dotenv from 'dotenv';
dotenv.config();
import { configPassport } from './config/passport';
import { configSession } from './config/session';

import { PORT } from './config/envvar';
import { runMigrations } from './config/runMigrations';
import * as routes from './routes';

const app: Express = express();

configSession(app);
configPassport(app);
Object.values(routes).forEach((route) => route(app));

const server = app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}/api`));
server.on('error', console.error);

runMigrations().then(console.log);
