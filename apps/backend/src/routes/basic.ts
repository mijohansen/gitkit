import type { Application } from 'express';
import express from 'express';
import { join } from 'path';

export const basicRoutes = (app: Application) => {
  app.use('/assets', express.static(join(__dirname, 'assets')));

  app.get('/api', (req, res) => {
    res.send({ message: 'Welcome to backend!' });
  });
};
