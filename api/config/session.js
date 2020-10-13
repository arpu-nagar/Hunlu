import session from 'express-session';
import redisStore from './redis';

export default session({
	resave: false,
	saveUninitialized: false,
	secret: process.env.SESSION_SECRET || 'nice',
	store: redisStore(session),
	cookie: { maxAge: 604800000 }
});
