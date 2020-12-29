import AWS from 'aws-sdk';
import 'dotenv/config';
import multer from 'multer';
import multerS3 from 'multer-s3';

const config1 = {
	accessKeyId: process.env.Access_Key_ID,
	secretAccessKey: process.env.AWS_Secret_Access_Key,
	region: 'ap-south-1',
	apiVersion: '2006-03-01',
	signatureVersion: 'v4',
};

let s3 = new AWS.S3(config1);

var bucketParams = {
	Bucket: 'hunlu-trial-1',
};

const multerS3Config = multerS3({
	s3: s3,
	bucket: 'hunlu-trial-1',
	acl: 'public-read',
	metadata: function (req, file, cb) {
		cb(null, { fieldName: file.fieldname });
	},
	contentType: function (req, file, cb) {
		cb(null, file.mimetype); // gives mimetype of file
	},
	key: function (req, file, cb) {
		console.log(file);
		cb(null, new Date().toISOString() + '-' + file.originalname);
	},
});

const upload = multer({
	storage: multerS3Config,
	limits: {
		fileSize: 1024 * 1024 * 50, // we are allowing only 5 MB files
	},
});

export default upload;
