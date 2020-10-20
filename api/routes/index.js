import express from 'express';
import '../config/oauth/google';
import '../config/oauth/facebook';
import payment from './payment';
import auth from './auth';
import passport from 'passport';
const router = express.Router();

//auth routes
router.get(
	'/auth/google',
	passport.authenticate('google', {
		scope: ['https://www.googleapis.com/auth/plus.login', 'email']
	})
);

router.get(
	'/auth/google/callback',
	passport.authenticate('google', { failureRedirect: '/login' }),
	(req, res) => {
		res.redirect('http://localhost:3000/home');
	}
);

router.get(
	'/auth/facebook',
	passport.authenticate('facebook', {
		scope: ['email']
	})
);

router.get(
	'/auth/facebook/callback',
	passport.authenticate('facebook', { failureRedirect: '/login' }),
	(req, res) => {
		res.redirect('/login');
	}
);

router.get('/home', async (req, res) => {
	return res.send({
		user: req.user
	});
});

router.post('/status', async (req, res) => {
	if (req.user)
		res.send({
			user: req.user,
			success: true
		});
	else
		res.send({
			user: null,
			success: false
		});
});

router.post('/pay', auth.islogged, payment.pay);
router.post('/paytm/callback', payment.callback);

router.get('/logout', (req, res) => {
	req.session.destroy();
	return res.send({
		success: true
	});
});

export default router;
