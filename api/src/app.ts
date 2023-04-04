import express, { Request, Response, NextFunction } from 'express';
//import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import morgan from 'morgan';
// import routes from './routes/index.js';
import cors from "cors";

const server = express();

server.set('name', 'API');

server.use(express.json());
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
//server.use(cookieParser());
server.use(morgan('dev'));
server.use(cors());
server.use((req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

// server.use('/', routes);
interface HttpError extends Error {
    status?: number;
  }

  server.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
  });

export default server;