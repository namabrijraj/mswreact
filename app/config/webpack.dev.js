const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: { "app.utils": ["./src_style/js/main"] },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../..", "public/js/"),
    publicPath: "/",
  },
  resolve: {
    extensions: [".js"],
    modules: ["node_modules", path.resolve(__dirname, "..", "src_style")],
  },
  resolveLoader: {
    modules: ["node_modules"],
  },
};
