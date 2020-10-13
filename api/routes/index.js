import express from 'express';
import '../config/oauth/google';
import '../config/oauth/facebook';
import passport from 'passport';
const router = express.Router();

//auth routes
router.get(
	'/auth/google',
	passport.authenticate('google', {
		scope: ['https://www.googleapis.com/auth/plus.login']
	})
);

router.get(
	'/auth/google/callback',
	passport.authenticate('google', { failureRedirect: '/login' }),
	(req, res) => {
		res.redirect('/api/home');
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
	passport.authenticate('facebook', {
		successRedirect: '/home',
		failureRedirect: '/login'
	})
);

router.get('/home', async (req, res) => {
	return res.send({
		user: req.user
	});
});

router.get('/logout', (req, res) => {
	req.session.destroy();
	return res.send({
		success: true
	});
});

export default router;
