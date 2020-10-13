import express from 'express';
import body from 'body-parser';
import logger from 'morgan';
import cors from 'cors';
import 'dotenv/config';
import passport from 'passport';

import connectDB from './db/db';
import session from './config/session';
import routes from './routes/index';
import passportConfig from './config/passport';

const app = express();
app.use(session);
connectDB();
app.use(body.json());
app.use(body.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(cors());
passportConfig(passport);
app.use(passport.initialize());
app.use(passport.session());

app.use('/api', routes);

const PORT = process.env.PORT || 2525;
app.listen(PORT, () => {
	console.log(`Server init at port ${PORT}`);
});
