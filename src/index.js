import express from 'express';
import bodyParser from 'body-parser';

import './database/index';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes);

app.listen(3333);
