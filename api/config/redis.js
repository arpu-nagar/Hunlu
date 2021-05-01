import redis from 'redis';
import connectRedis from 'connect-redis';

const client = redis.createClient(11886, process.env.REDIS_HOST, {
    auth_pass: 'HAKiWDcby1WkQjFJ8g8wKhqSepi5xvKU',
    return_buffers: true,
});
const redisConfig = {
    client: client,
    ttl: 604801,
};

export default (session) => {
    const redisStore = connectRedis(session);
    return new redisStore(redisConfig);
};
