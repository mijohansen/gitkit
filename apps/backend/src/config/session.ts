import type { Application } from 'express';
import session from 'express-session';
import ConnectSimple from 'connect-pg-simple';
import { pool } from '../database/client';

export const configSession = (app: Application) => {
  app.set('trust proxy', 1);

  app.use(
    session({
      store: new (ConnectSimple(session))({
        pool,
      }),
      secret: 'keyboard cat kjjk',
      resave: false,
      saveUninitialized: true,
      cookie: { secure: false },
    })
  );
};
