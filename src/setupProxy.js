const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/player-stats", {
      target: "https://api.nhle.com/stats",
      changeOrigin: true,
      pathRewrite: {
        "^/player-stats": "",
      },
    })
  )
}
