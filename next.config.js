const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'https://marcus-lee.net/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig