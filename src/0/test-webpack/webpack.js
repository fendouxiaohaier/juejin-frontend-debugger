const path = require('path');

module.exports = {
  entry: path.join(__dirname, '/src/index.js'),
  output: {
    path: path.join(__dirname, 'outs'),
    filename: 'index.js',
    chunkFilename: '[name].bundle.js',
  },
  mode: 'development',
  devtool: 'cheap-module-source-map',
};
