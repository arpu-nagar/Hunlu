import passport from 'passport';
import ps from 'passport-facebook';
import User from '../../models/user';

const FacebookStrategy = ps.Strategy;

passport.use(
	new FacebookStrategy(
		{
			clientID: process.env.FACEBOOK_APP_ID,
			clientSecret: process.env.FACEBOOK_APP_SECRET,
			callbackURL:
				'http://localhost:2525/api/auth/facebook/callback'
		},
		async (accessToken, refreshToken, profile, done) => {
			console.log(profile);
			const exists = await User.findOne({
				facebookId: profile.id
			});
			if (exists) return done(null, exists);

			const newUser = new User({
				facebookId: profile.id,
				name: profile.displayName
			});
			await newUser.save();
			return done(null, newUser);
		}
	)
);
