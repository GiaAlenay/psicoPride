
import express  from 'express';
import bodyParser from 'body-parser';
import { port } from './config';
import sequelize from './database';
import allRoutes from './routes/index';
import morgan from "morgan";
import cors from "cors";
import cookieParser from 'cookie-parser';
//necesitas instalar los @types de todas las dependencias o si no saldra error 

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true , limit: '50mb'}));
app.use(bodyParser.json({ limit: '50mb' }));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, DELETE, PATCH"
    );
    next();
  });

app.use('/', allRoutes);

sequelize.sync({ force: true}).then(() => {
    app.listen(port, () => {
        console.log(`Server started on ${port}`);
    });
  });