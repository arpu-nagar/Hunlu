import Content from '../models/content';

let exp = {};

exp.addContent = async (req, res) => {
	const { name, desc, genre, imdb, rt, type } = req.body;
	const { location } = req.file;

	const newContent = new Content({
		name: name,
		desc: desc,
		link: location,
		genre: genre,
		type: type,
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
};

exp.removeContent = async (req, res) => {
	const id = req.params.id;
	const ok = await Content.deleteOne({ _id: id });
	if (ok)
		return res.send({
			success: true,
			msg: 'Deleted.',
		});
	else
		return res.send({
			success: true,
			msg: 'No such content exists.',
		});
};

export default exp;
