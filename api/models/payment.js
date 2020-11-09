import mongoose from 'mongoose';

const paymentSchema = mongoose.Schema({
	cost: String,
	user: {
		googleId: String,
		facebookId: String,
		name: String,
	},
	txnid: String,
	success: {
		type: Boolean,
		default: false,
	},
	date: Date,
});

export default mongoose.model('payments', paymentSchema);
