// webpack.config.js
const path = require('path');

module.exports = {
  //... other settings
  resolve: {
    alias: {
      'console-browserify': path.resolve(__dirname, 'src/lib/console-browserify'),
    },
  },
};
