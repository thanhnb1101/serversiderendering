const path = require("path");

module.exports = {
  //inform webpack that we're building a bundle
  //for nodeJS, rather than for the browser
  target: "node",

  //tell webpack the root file of our
  //server application
  entry: "./src/index.js",

  //tell webpack where to out the output file
  //that is generated
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },

  //Tell webpack to run babel on every fule it runs through
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            "react",
            "stage-0",
            ["env", { targets: { browsers: ["last 2 versions"] } }]
          ]
        }
      }
    ]
  }
};
