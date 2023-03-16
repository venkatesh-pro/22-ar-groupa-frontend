const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "acceleratars-back-service.acceleratars:80",
      changeOrigin: true,
    })
  );
};
