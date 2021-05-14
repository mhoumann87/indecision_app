const path = require('path');

module.exports = {
  // Set entry point
  entry: './src/app.js',
  // Set output file
  output: {
    path: path.join(__dirname, 'public/scripts'),
    filename: 'bundle.js',
  },
};
