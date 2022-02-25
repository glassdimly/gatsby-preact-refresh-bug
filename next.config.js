const debug = require('debug')('webpack')
const { merge } = require('webpack-merge');
const path = require('path');
const webpackCommon = require('./config/webpack.common.js');
const { WebpackConfigDumpPlugin } = require('webpack-config-dump-plugin');
const withPreact = require('next-plugin-preact')


/** @type {import('next').NextConfig} */


const nextConfig = withPreact({
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    const mergedConfig = merge(config, webpackCommon);
    // if DEBUG=webpack on bash, dump final webpack config to file... FWIW.
    if (process.env.DEBUG === 'webpack') {
      debug('mergedWebpackConfig', mergedConfig);
      mergedConfig.plugins.push(new WebpackConfigDumpPlugin({name: 'webpackDebugConfigDump.json', showFunctionNames: true, depth: 5}));
    }
    return mergedConfig;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['media.giphy.com'],
  },
});

module.exports = nextConfig;
