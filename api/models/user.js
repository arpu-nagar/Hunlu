import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
	googleId: {
		type: String,
		unique: true,
	},
	facebookId: {
		type: String,
		unique: true,
	},
	email: {
		type: String,
	},
	name: {
		type: String,
	},
	membership: {
		type: String,
		default: '0',
	},
	favorites: [String],
	admin: {
		type: Number,
		default: 0,
	},
	likes: [String],
	dislikes: [String],
	active: {
		type: Number,
		default: 0,
	},
});

export default mongoose.model('user', userSchema);
