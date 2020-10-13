export default (passport) => {
	passport.serializeUser((User, done) => {
		return done(null, User);
	});

	passport.deserializeUser((User, done) => {
		return done(null, User);
	});
};
