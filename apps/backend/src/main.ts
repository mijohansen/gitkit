import express from 'express';
import * as dotenv from 'dotenv';
dotenv.config();
import { configPassport } from './config/passport';
import { configSession } from './config/session';
import { basicRoutes } from './routes/basic';
import { PORT } from './config/envvar';
import { runMigrations } from './config/runMigrations';
import { repoRoutes } from './routes/repo';

const app = express();

configSession(app);
configPassport(app);
basicRoutes(app);
repoRoutes(app);

const server = app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}/api`));
server.on('error', console.error);

runMigrations().then(console.log);
