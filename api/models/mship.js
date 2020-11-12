import mongoose from 'mongoose';

const mshipSchema = new mongoose.Schema({
	type: String,
	cost: String,
	mems: Number,
});

export default mongoose.model('memberships', mshipSchema);
