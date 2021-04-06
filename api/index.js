import express from 'express';
import body from 'body-parser';
import logger from 'morgan';
import cors from 'cors';
import 'dotenv/config';
import passport from 'passport';
import path from 'path';
import connectDB from './db/db';
import session from './config/session';
import routes from './routes/index';
import passportConfig from './config/passport';
import './config/aws';

const app = express();
app.use(session);
connectDB();
app.use(body.json({ limit: '50mb' }));
app.use(body.urlencoded({ limit: '50mb', extended: false }));
app.use(logger('dev'));
if (process.env.MODE === 'DEV')
    app.use(
        cors({
            origin: 'http://localhost:3000', // allow to server to accept request from different origin
            methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
            credentials: true, // allow session cookie from browser to pass through
        })
    );

passportConfig(passport);
app.use(passport.initialize());
app.use(passport.session());

app.use('/api', routes);
if (process.env.MODE === 'PROD') {
    app.use(cors());
    app.use(express.static(path.join(__dirname, '../web/build')));
    app.get('/*', (req, res) => {
        return res.sendFile(path.join(__dirname, '../web/build/index.html'));
    });
}
const PORT = process.env.PORT || 2525;
app.listen(PORT, () => {
    console.log(`Server has started on PORT ${PORT}.`);
});
