const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: __dirname + "/js/basket.js",
    mode: "development",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js",
        publicPath: "/",
    },
    module: {
        rules: [],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/basket.html",
        }),
    ],
    devServer: {
        static: "./",
        port: 7700,
    },
};