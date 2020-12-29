import mongoose from 'mongoose';

const connectDB = async () => {
	try {
		if (!process.env.MONGOURI) {
			console.log('MONGOURI missing in the .env file');
			process.exit(0);
		}
		await mongoose.connect(process.env.MONGOURI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			useFindAndModify: false,
		});
		console.log('Database cnected.');
	} catch (err) {
		console.log(err.toString());
	}
};

module.exports = connectDB;
