const withReactSvg = require('next-react-svg')
const path = require('path')

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join( __dirname, 'styles' )],
  },
  images: {
    loader: 'imgix'
  },
}

module.exports = withReactSvg({
  include: path.resolve(__dirname, 'public/images'),
  webpack(config, options) {
    return config
  }
})
