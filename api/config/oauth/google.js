import passport from 'passport';
import pso from 'passport-google-oauth';
import User from '../../models/user';
import Membership from '../../models/mship';
const GoogleStrategy = pso.OAuth2Strategy;
passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			callbackURL: 'http://localhost:2525/api/auth/google/callback',
		},
		async (accessToken, refreshToken, profile, done) => {
			console.log(profile);
			const exists = await User.findOne({
				googleId: profile.id,
			});
			if (exists) {
				await User.updateOne(
					{
						googleId: profile.id,
					},
					{ $inc: { active: 1 } }
				);
				return done(null, exists);
			}

			const newUser = new User({
				googleId: profile.id,
				name: profile.displayName,
				email: profile.emails[0].value,
				active: 1,
			});
			await newUser.save();
			return done(null, newUser);
		}
	)
);
