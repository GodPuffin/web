const { remarkCodeHike } = require("@code-hike/mdx")
const theme = require("shiki/themes/material-palenight.json")

const withNextra = require('nextra')({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.js',
  mdxOptions: {
    remarkPlugins: [[remarkCodeHike, { theme }]],
  },
  // optional: add `unstable_staticImage: true` to enable Nextra's auto image import
})
module.exports = withNextra()
