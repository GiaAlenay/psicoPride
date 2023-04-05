
import express  from 'express';
import bodyParser from 'body-parser';
import { port } from './config';
import sequelize from './database';
import usersRoutes from './routes/users.routes';


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/users', usersRoutes);

sequelize.sync({ force: true}).then(() => {
    app.listen(3000, () => {
        console.log('Server started on port 3000');
    });
  });