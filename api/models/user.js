import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
	googleId: {
		type: String,
		unique: true
	},
	facebookId: {
		type: String,
		unique: true
	},
	email: {
		type: String
	},
	name: {
		type: String
	},
	membership: {
		type: String
	}
});

export default mongoose.model('user', userSchema);
