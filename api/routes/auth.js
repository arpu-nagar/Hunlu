let exp = {};

exp.islogged = async (req, res) => {
	if (req.user) return true;

	return false;
};

export default exp;
