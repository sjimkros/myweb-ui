const {createProxyMiddleware} = require("http-proxy-middleware");

module.exports = (app)=>{
    app.use("/api",createProxyMiddleware({
        target:"http://localhost",
        changeOrigin:true,
        pathRewrite: {
            '^/api' : '/myweb'    // 重写请求，比如我们源访问的是api/old-path，那么请求会被解析为/api/new-path
        },
    }))
}