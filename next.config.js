const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: '@import "variables.scss";'
  },
  env: {
    API_ENDPOINT: 'http://localhost:3000/api'
  }
}

module.exports = nextConfig
