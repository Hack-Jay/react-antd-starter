const path = require('path');

module.exports = env => {
  env.production ? require('./config/webpack.prod') : require('./config/webpack.dev')
};
