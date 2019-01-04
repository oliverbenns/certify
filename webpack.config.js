const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  mode: "production",
  target: "node",
  externals: [nodeExternals()],
  resolve: {
    extensions: [".ts", ".tsx"]
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              babelrc: false,
              presets: [
                "@babel/react",
                [
                  "@babel/env",
                  {
                    modules: false
                  }
                ]
              ]
            }
          },
          {
            loader: "ts-loader"
          }
        ]
      }
    ]
  }
};
