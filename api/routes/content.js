import Content from '../models/content';
import User from '../models/user';
import mongoose from 'mongoose';
let exp = {};

exp.like = async (req, res) => {
    try {
        const { id, userID } = req.body;
        const exists = await User.findOne({
            _id: new mongoose.Types.ObjectId(userID),
            likes: {
                $in: [id],
            },
        });
        if (exists)
            return res.send({
                success: true,
                msg: 'Already Liked',
            });

        await User.updateOne(
            {
                _id: new mongoose.Types.ObjectId(userID),
            },
            {
                $push: { likes: id },
            }
        );
        await Content.updateOne(
            {
                id: id,
            },
            { $inc: { likes: 1 } }
        );

        return res.send({
            success: true,
            msg: 'Liked',
        });
    } catch (err) {
        console.log(err);
        res.send({
            success: false,
            msg: 'Internal Server Error',
        });
    }
};

exp.dislike = async (req, res) => {
    try {
        const { id, userID } = req.body;
        const exists = await User.findOne({
            _id: new mongoose.Types.ObjectId(userID),
            dislikes: {
                $in: [id],
            },
        });
        if (exists)
            return res.send({
                success: true,
                msg: 'Already Liked',
            });

        await User.updateOne(
            {
                _id: new mongoose.Types.ObjectId(userID),
            },
            {
                $push: { dislikes: id },
            }
        );
        await Content.updateOne(
            {
                id: id,
            },
            { $inc: { dislikes: 1 } }
        );
        return res.send({
            success: true,
            msg: 'Liked',
        });
    } catch (error) {
        console.log(err);
        res.send({
            success: false,
            msg: 'Internal Server Error',
        });
    }
};

exp.addFavourite = async (req, res) => {
    try {
        const { id, userID } = req.body;
        const exists = await User.findOne({
            _id: new mongoose.Types.ObjectId(userID),
            favorites: {
                $in: [id],
            },
        });
        // const ex = await User.findOne({ _id: new mongoose.Types.ObjectId(userID) });
        // console.log(ex);
        if (exists)
            return res.send({ success: true, msg: 'Already Present in Fav.' });
        else console.log('ok');
        const x = await User.updateOne(
            { _id: new mongoose.Types.ObjectId(userID) },
            { $push: { favorites: id } }
        );
        const y = await Content.updateOne(
            { _id: new mongoose.Types.ObjectId(id) },
            { $inc: { favorite: 1 } }
        );
        console.log(x);
        console.log(y);
        return res.send({
            success: true,
            msg: 'Favourited',
        });
    } catch (error) {
        console.log(error);
        return res.send({ msg: 'Error', success: false });
    }
};

// TODO toggle feature
export default exp;
