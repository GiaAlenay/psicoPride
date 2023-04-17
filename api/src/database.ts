import { db_host, db_port, db_name, db_user, db_password } from './config';
import { Sequelize } from 'sequelize';

let sequelize =
  process.env.NODE_ENV === "production"
    ? new Sequelize({
        database: db_name,
        dialect: "postgres",
        host: db_host,
        port: 5432,
        username: db_user,
        password: db_password,
        pool: {
          max: 3,
          min: 1,
          idle: 10000,
        },
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
          keepAlive: true,
        },
        ssl: true,
      })
    : new Sequelize(`postgres://${db_user}:${db_password}@${db_host}/psicopride`, {
        logging: false, // set to console.log to see the raw SQL queries
        native: false, // lets Sequelize know we can use pg-native for ~30% more speed
      });

// const sequelize = new Sequelize(
//   db_name,
//   db_user,
//   db_password,
//   {
//     host: db_host,
//     port: db_port,
//     dialect: "postgres",
//   }
// );



export default sequelize;