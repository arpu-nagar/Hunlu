const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
	app.use(
		'/api',
		createProxyMiddleware({
			target: 'http://api:2525',
			changeOrigin: true,
		})
	);
};
