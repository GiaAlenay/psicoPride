import { db_host, db_port, db_name, db_user, db_password } from './config';
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
  db_name,
  db_user,
  db_password,
  {
    host: db_host,
    port: db_port,
    dialect: "postgres",
  }
);



export default sequelize;