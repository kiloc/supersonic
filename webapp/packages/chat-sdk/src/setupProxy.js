const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:9099',
      changeOrigin: true,
    })
  );
  app.use(
    '/openapi',
    createProxyMiddleware({
      target: 'http://localhost:9099',
      changeOrigin: true,
    })
  );
};
