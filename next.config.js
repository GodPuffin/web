const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'https://marcus-lee.net/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig