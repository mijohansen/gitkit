import runner from 'node-pg-migrate';
import { pool } from '../database/client';

export const runMigrations = async () => {
  const client = await pool.connect();
  return runner({
    migrationsTable: 'migrations',
    dir: 'migrations',
    direction: 'up',
    dbClient: client,
  });
};
