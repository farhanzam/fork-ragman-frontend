const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  reactStrictMode: true,
  env: {
    GOOGLE_CLIENT_ID: "313398112272-o2kv50rvmq6okhbpqmq1ces50ek2vcmd.apps.googleusercontent.com",
    GITHUB_CLIENT_ID: "Ov23liqRIuATEgEEWMx4",
    GITHUB_CLIENT_SECRET: "270598c384f0b73203e45ca6e69662ff3f6e856e"
  },
  webpack(config, { isServer, dev }) {
    config.experiments = {
      asyncWebAssembly: true,
      layers: true,
    };

    return config;
  },
};

module.exports = nextConfig;
