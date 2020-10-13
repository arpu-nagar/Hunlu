import mongoose from 'mongoose';

const mshipSchema = new mongoose.Schema({
	type: String,
	cost: String
});

export default mongoose.model('membership', mshipSchema);
