import redis from 'redis';
import connectRedis from 'connect-redis';

const client = redis.createClient();

const redisConfig = {
	host: process.env.REDIS_HOST || 'localhost',
	port: 6379,
	client: client,
	ttl: 604800,
};

export default (session) => {
	const redisStore = connectRedis(session);
	return new redisStore(redisConfig);
};
