const path = require('path');

module.exports = {
  // entry: path.join(__dirname, '/src/user_cjs_module/user.js'),
  // entry: path.join(__dirname, '/src/user_es_module/user.js'),
  // entry: path.join(__dirname, '/src/user_es_import_cjs_module/user.js'),
  entry: path.join(__dirname, '/src/user_cjs_import_es_module/user.js'),
  output: {
    // path: path.join(__dirname, 'outs_cjs'),
    // path: path.join(__dirname, 'outs_mjs'),
    // path: path.join(__dirname, 'outs_es_import_cjs_module'),
    path: path.join(__dirname, 'outs_cjs_import_es_module'),
    filename: 'index.js',
    chunkFilename: '[name].bundle.js',
  },
  mode: 'development',
  devtool: 'cheap-module-source-map',
};
