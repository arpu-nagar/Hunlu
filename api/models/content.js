import mongoose from 'mongoose';

const contentSchema = new mongoose.Schema({
	link: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	desc: {
		type: String,
		required: true,
	},
	genre: String,
	rating: [
		{
			organisation: String,
			rating: String,
		},
	],
	likes: {
		type: Number,
		default: 0,
	},
	dislikes: {
		type: Number,
		default: 0,
	},
	favorite: {
		type: Number,
		default: 0,
	},
	type: String,
});

export default mongoose.model('content', contentSchema);
