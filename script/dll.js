const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const packageJson = require('../package.json')

const modulesDependencies = Object.keys(packageJson.dependencies)

const { BUILD_OUTPUT_DIR, NODE_ENV } = process.env
const OUTPUT_PATH = BUILD_OUTPUT_DIR ? `${BUILD_OUTPUT_DIR}/lib/` : path.resolve('dist/lib')

const env = NODE_ENV === 'development' ? 'development' : 'production'
const isProd = Boolean(env === 'production')

module.exports = {
  devtool: isProd ? false : 'source-map',
  mode: env,
	entry: {
    // 需要提取的包
		dll: modulesDependencies
	},
	output: {
		path: OUTPUT_PATH,
		hashDigestLength: 8,
		filename: '[name]-[hash].js',
		library: 'lib_dll',
		libraryTarget: 'var'
	},
	plugins: [
		new CleanWebpackPlugin(),
		new webpack.HashedModuleIdsPlugin(),
		new webpack.DllPlugin({
			context: __dirname,
			path: path.resolve(OUTPUT_PATH, 'manifest.json'),
			name: '[name]-[hash]'
		})
	]
}
