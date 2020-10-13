import mongoose from 'mongoose';

const mshipSchema = new mongoose.model({
	type: String,
	cost: String
});

export default new mongoose.model('membership', mshipSchema);
