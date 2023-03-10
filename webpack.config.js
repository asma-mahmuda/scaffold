const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'index.bundle.js'
  },
  mode: 'development',
  devServer: {
    compress: true,
    open: true,
    contentBase: './build',
    port: 9000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/, 
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
      {
          test: /\.(eot|otf|ttf|woff|woff2)$/,
          loader: require.resolve("file-loader"),
          options: {
            name: "static/media/[name].[hash:8].[ext]"
          }
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  performance: { 
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
 },
}