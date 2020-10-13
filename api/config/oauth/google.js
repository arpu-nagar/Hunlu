import passport from 'passport';
import pso from 'passport-google-oauth';
import User from '../../models/user';

const GoogleStrategy = pso.OAuth2Strategy;
passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			callbackURL:
				'http://localhost:2525/api/auth/google/callback'
		},
		async (accessToken, refreshToken, profile, done) => {
			const exists = await User.findOne({
				googleId: profile.id
			});
			if (exists) return done(null, exists);

			const newUser = new User({
				googleId: profile.id,
				name: profile.displayName,
				email: profile.email
			});
			await newUser.save();
			return done(null, newUser);
		}
	)
);
