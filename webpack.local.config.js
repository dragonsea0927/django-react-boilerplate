const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const BundleTracker = require('webpack-bundle-tracker');
const path = require('path');

const baseConfig = require('./webpack.base.config');

const nodeModulesDir = path.resolve(__dirname, 'node_modules');

baseConfig.mode = 'development';

baseConfig.entry = [
  'react-hot-loader/patch',
  'whatwg-fetch',
  '@babel/polyfill',
  './frontend/js/index.js',
];

baseConfig.optimization = {
  splitChunks: {
    chunks: 'all',
  },
};

baseConfig.output = {
  path: path.resolve('./frontend/bundles/'),
  publicPath: 'http://localhost:3000/frontend/bundles/',
  filename: '[name].js',
};

baseConfig.module.rules.push(
  {
    test: /\.jsx?$/,
    exclude: [nodeModulesDir],
    loader: require.resolve('babel-loader'),
  },
  {
    test: /\.(woff(2)?|eot|ttf)(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'url-loader?limit=100000',
  }
);

baseConfig.plugins = [
  new webpack.EvalSourceMapDevToolPlugin({
    exclude: /node_modules/
  }),
  new webpack.NamedModulesPlugin(),
  new webpack.NoEmitOnErrorsPlugin(), // don't reload if there is an error
  new BundleTracker({
    filename: './webpack-stats.json',
  }),
  new webpack.LoaderOptionsPlugin({
    options: {
      context: __dirname,
      postcss: [autoprefixer],
    },
  }),
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    Tether: 'tether',
    'window.Tether': 'tether',
    Popper: ['popper.js', 'default'],
    Alert: 'exports-loader?Alert!bootstrap/js/dist/alert',
    Button: 'exports-loader?Button!bootstrap/js/dist/button',
    Carousel: 'exports-loader?Carousel!bootstrap/js/dist/carousel',
    Collapse: 'exports-loader?Collapse!bootstrap/js/dist/collapse',
    Dropdown: 'exports-loader?Dropdown!bootstrap/js/dist/dropdown',
    Modal: 'exports-loader?Modal!bootstrap/js/dist/modal',
    Popover: 'exports-loader?Popover!bootstrap/js/dist/popover',
    Scrollspy: 'exports-loader?Scrollspy!bootstrap/js/dist/scrollspy',
    Tab: 'exports-loader?Tab!bootstrap/js/dist/tab',
    Tooltip: 'exports-loader?Tooltip!bootstrap/js/dist/tooltip',
    Util: 'exports-loader?Util!bootstrap/js/dist/util',
  }),
];

baseConfig.resolve.alias = {
  'react-dom': '@hot-loader/react-dom',
};

module.exports = baseConfig;
