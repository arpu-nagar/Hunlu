import express from 'express';
import '../config/oauth/google';
import '../config/oauth/facebook';
import payment from './payment';
import auth from './auth';
import passport from 'passport';
import User from '../models/user';
import upload from '../config/aws';
import admin from './admin';
const router = express.Router();

//auth routes
router.get(
	'/auth/google',
	passport.authenticate('google', {
		scope: ['https://www.googleapis.com/auth/plus.login', 'email'],
	})
);

router.get(
	'/auth/google/callback',
	passport.authenticate('google', {
		failureRedirect: 'http://localhost:3000/login',
	}),
	(req, res) => {
		res.redirect('http://localhost:3000/home');
	}
);

router.get(
	'/auth/facebook',
	passport.authenticate('facebook', {
		scope: ['email'],
	})
);

router.get(
	'/auth/facebook/callback',
	passport.authenticate('facebook', {
		failureRedirect: 'http://localhost:3000/login',
	}),
	(req, res) => {
		res.redirect('http://localhost:3000/home');
	}
);

router.get('/home', async (req, res) => {
	return res.send({
		user: req.user,
	});
});

router.post('/status', async (req, res) => {
	if (req.user) {
		let ex;
		if (req.user.googleId)
			ex = await User.findOne({
				googleId: req.user.googleId,
			});
		else
			ex = await User.findOne({
				facebookId: req.user.facebookId,
			});

		if (ex.membership == '1') req.session.isPaid = true;
		else req.session.isPaid = false;
		res.send({
			user: req.user,
			success: true,
			isPaid: req.session.isPaid,
		});
	} else {
		res.send({
			user: null,
			success: false,
			isPaid: false,
		});
	}
});

router.get('/pay/:id', auth.islogged, payment.pay);
router.post('/paytm/callback', payment.callback);

router.get('/logout', (req, res) => {
	req.session.destroy();
	return res.send({
		success: true,
	});
});

router.post('/upload', upload.single('upload'), admin.addContent);

export default router;
