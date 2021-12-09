const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");

const isProd = process.env.NODE_ENV === "production";

const config = {
  mode: isProd ? "production" : "development",
  entry: "./src/index.jsx",
  devtool: isProd ? "source-map" : "inline-source-map",
  output: {
    path: __dirname + "public/",
    filename: "bundle.js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: ["*", ".js", ".jsx", ".json"]
        },
        use: "babel-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "/public/index.html"
    })
  ]
};

if (isProd) {
  config.optimization = {
    splitChunks: {
      chunks: "all"
    },
    minimizer: [new TerserWebpackPlugin()]
  };
} else {
  config.devServer = {
    port: 8080,
    hot: true,
    compress: true,
    open: true,
    historyApiFallback: true
  };
}

module.exports = config;
