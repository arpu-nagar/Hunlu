const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
	if (process.env.NODE_ENV == 'development') {
		app.use(
			'/api',
			createProxyMiddleware({
				target: 'http://api',
				changeOrigin: true,
			})
		);
	} else {
		app.use(
			'/api',
			createProxyMiddleware({
				target: 'http://api',
				changeOrigin: true,
			})
		);
	}
};
