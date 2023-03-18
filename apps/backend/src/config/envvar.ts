import * as env from 'env-var';

export const DB_DATABASE: string = env.get('DB_DATABASE').required().asString();
export const DB_HOST: string = env.get('DB_HOST').required().asString();
export const DB_PASSWORD: string = env.get('DB_PASSWORD').required().asString();
export const DB_PORT: number = env.get('DB_PORT').required().asIntPositive();
export const DB_USER: string = env.get('DB_USER').required().asString();
export const GITHUB_CLIENT_ID: string = env.get('GITHUB_CLIENT_ID').required().asString();
export const GITHUB_CLIENT_SECRET: string = env.get('GITHUB_CLIENT_SECRET').required().asString();
export const PORT: number = env.get('PORT').required().asIntPositive();
export const BASEURL: string = env.get('BASEURL').required().asUrlString();
