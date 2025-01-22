const withNextIntl = require("next-intl/plugin")();

/** @type {import('next').NextConfig} */
const config = {};

module.exports = withNextIntl({
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    return config;
  },
  swcMinify: false,
});
