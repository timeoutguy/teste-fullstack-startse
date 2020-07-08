import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import './database/index';
import routes from './routes';

dotenv.config();

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes);

app.listen(process.env.APP_PORT || 3333);
