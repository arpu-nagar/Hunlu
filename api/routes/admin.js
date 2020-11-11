import Content from '../models/content';

let exp = {};

exp.addContent = async (req, res) => {
	const { name, desc, genre, imdb, rt } = req.body;
	const { location } = req.file;

	const newContent = new Content({
		name: name,
		desc: desc,
		link: location,
		genre: genre,
		ratings: [
			{
				organisation: 'IMDB',
				rating: imdb,
			},
			{
				organisation: 'Rotten Tomatoes',
				rating: rt,
			},
		],
	});
	await newContent.save();
	return res.send({
		success: true,
		msg: 'Content Added!',
	});
	// file: {
	// 	fieldname: 'upload',
	// 	originalname: 'videoplayback.mp4',
	// 	encoding: '7bit',
	// 	mimetype: 'video/mp4',
	// 	size: 103935,
	// 	bucket: 'hunlu-trial-1',
	// 	key: '2020-11-10T09:23:01.241Z-videoplayback.mp4',
	// 	acl: 'public-read',
	// 	contentType: 'video/mp4',
	// 	contentDisposition: null,
	// 	storageClass: 'STANDARD',
	// 	serverSideEncryption: null,
	// 	metadata: { fieldName: 'upload' },
	// 	location: 'https://hunlu-trial-1.s3.ap-south-1.amazonaws.com/2020-11-10T09%3A23%3A01.241Z-videoplayback.mp4',
	// 	etag: '"a9d4d2597bc88e5777bd0c886ad6c30b"',
	// 	versionId: undefined
	//   },
};

export default exp;
