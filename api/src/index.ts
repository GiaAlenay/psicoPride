
import express  from 'express';
import bodyParser from 'body-parser';
import { port } from './config';
import sequelize from './database';
import allRoutes from './routes/index';
import morgan from "morgan";
import cors from "cors";


const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', allRoutes);

sequelize.sync({ force: true}).then(() => {
    app.listen(3000, () => {
        console.log('Server started on port 3000');
    });
  });