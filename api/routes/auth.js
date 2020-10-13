let exp = {};

exp.islogged = async (req, res, next) => {
	if (req.user) next();
	return false;
};

export default exp;
