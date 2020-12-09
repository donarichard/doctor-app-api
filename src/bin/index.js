import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import router from '../api';
import config from '../config';
const app = express();

app.use(express.json());
app.use(morgan('dev'));

// enable cors
app.use(cors());
app.options('*', cors());

app.use(config.API_PRIFIX, router);

export default app;
