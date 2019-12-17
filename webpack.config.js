module.exports = (env, args) => {
  return args.mode === 'production' ? require('./config/webpack.prod') : require('./config/webpack.dev')
};
