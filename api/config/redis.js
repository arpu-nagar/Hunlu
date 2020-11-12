import redis from 'redis';
import connectRedis from 'connect-redis';

const client = redis.createClient(6379, process.env.REDIS_HOST || 'localhost');

const redisConfig = {
	client: client,
	ttl: 604800,
};

export default (session) => {
	const redisStore = connectRedis(session);
	return new redisStore(redisConfig);
};
