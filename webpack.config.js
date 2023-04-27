const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.ts",
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    library: {
      type: "commonjs",
    },
  },
  optimization: {
    minimize: false,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: "ts-loader",
          options: {
            transpileOnly: false,
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    fallback: {
      fs: false,
      tls: false,
      net: false,
      path: false,
      zlib: false,
      http: false,
      https: false,
      stream: false,
      crypto: false,
      crypto: require.resolve("crypto-browserify"),
    },
    extensions: [".tsx", ".ts", ".js"],
  },
  target: "web",
  node: false,
};
