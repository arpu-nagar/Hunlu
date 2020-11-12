import passport from 'passport';
import ps from 'passport-facebook';
import User from '../../models/user';

const FacebookStrategy = ps.Strategy;

passport.use(
	new FacebookStrategy(
		{
			clientID: process.env.FACEBOOK_APP_ID,
			clientSecret: process.env.FACEBOOK_APP_SECRET,
			callbackURL: 'http://localhost:2525/api/auth/facebook/callback',
		},
		async (accessToken, refreshToken, profile, done) => {
			console.log(profile);
			const exists = await User.findOne({
				facebookId: profile.id,
			});
			if (exists) {
				await User.updateOne(
					{
						facebookId: profile.id,
					},
					{ $inc: { active: 1 } }
				);
				return done(null, exists);
			}
			if (exists) done(null, exists);

			const newUser = new User({
				facebookId: profile.id,
				name: profile.displayName,
				active: 1,
			});
			await newUser.save();
			done(null, newUser);
		}
	)
);
