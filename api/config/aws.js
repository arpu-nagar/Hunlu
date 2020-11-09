import AWS from 'aws-sdk';
import 'dotenv/config';

const config1 = {
	accessKeyId: process.env.Access_Key_ID,
	secretAccessKey: process.env.AWS_Secret_Access_Key,
	region: 'ap-south-1',
	apiVersion: '2006-03-01',
	signatureVersion: 'v4'
};

let s3 = new AWS.S3(config1);

var bucketParams = {
	Bucket: 'hunlu-trial-1'
};

s3.listObjects(bucketParams, function (err, data) {
	if (err) console.log('Error', err);
	else console.log('Success', data.Contents);
});
