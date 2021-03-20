import express from 'express';
import mongoose from 'mongoose';

import router from './server/router';

import { PORT, DB_URI, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_DATABASE } from './config';


const app = express();

app.listen(PORT, () => {
	console.log(`server running on: ${PORT}`);
});

mongoose.connect(`${DB_URI}${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}`,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true
	}
);

app.use(express.json());

app.use(router);
