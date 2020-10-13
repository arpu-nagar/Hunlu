import mongoose from 'mongoose';

const paymentSchema = new mongoose.model({
	cost: String,
	user: String,
	txnid: String,
	success: {
		type: Boolean,
		default: false
	},
	date: Date
});

export default new mongoose.model('payments', paymentSchema);
