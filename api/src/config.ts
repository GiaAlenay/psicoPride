import * as dotenv from 'dotenv';
dotenv.config({
  path: '${__dirname}/../.env'
});
export const port = Number(process.env.API_PORT);
export const db_host = String(process.env.DB_HOST);
export const db_port = Number(process.env.DB_PORT);
export const db_name = String(process.env.DB_NAME);
export const db_user = String(process.env.DB_USER);
export const db_password = String(process.env.DB_PASSWORD);
export const admin_password=String(process.env.ADMIN_PASSWORD);
export const jwt_key=String(process.env.JWT_KEY);
