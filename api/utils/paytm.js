import 'dotenv/config';

const PaytmConfig = {
	mid: process.env.MID,
	key: process.env.KEY,
	website: process.env.WEBSITE,
};

const _PaytmConfig = PaytmConfig;
export { _PaytmConfig as PaytmConfig };
