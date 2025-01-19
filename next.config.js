module.exports = {
    webpack: (config) => {
      config.resolve.alias.canvas = false;
      
      return config;
    },
}

module.exports = {
  swcMinify: false,
}