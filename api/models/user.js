import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
	googleId: {
		type: String
	},
	facebookId: {
		type: String
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

export default new mongoose.model('user', userSchema);
