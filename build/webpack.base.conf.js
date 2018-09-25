var path = require('path')
var fs = require('fs')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')
var MpvuePlugin = require('webpack-mpvue-asset-plugin') //mpVue资源路径解析插件
var glob = require('glob')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var relative = require('relative')

// 获取路径
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

function getEntry (rootSrc) {
  var map = {};
  glob.sync(rootSrc + '/pages/**/main.js')
  .forEach(file => {
    var key = relative(rootSrc, file).replace('.js', '');
    map[key] = file;
  })
   return map;
}

// 小程序的 App 入口
const appEntry = { app: resolve('./src/main.js') }
// 小程序的 Page 入口
const pagesEntry = getEntry(resolve('./src'), 'pages/**/main.js')
// 构建小程序入口
const entry = Object.assign({}, appEntry, pagesEntry)

module.exports = {
  // 如果要自定义生成的 dist 目录里面的文件路径，
  // 可以将 entry 写成 {'toPath': 'fromPath'} 的形式，
  // toPath 为相对于 dist 的路径, 例：index/demo，则生成的文件地址为 dist/index/demo.js
  entry,
  // 专门为微信小程序写的`target`, 具体的参考: http://mpvue.com/build/mpvue-webpack-target/
  target: require('mpvue-webpack-target'),
  // 输出的文件
  output: {
    path: config.build.assetsRoot, // `../dist/`
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production' //对外资源的公开目录
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    // 通过`alias`来覆盖原`vue.runtime`为我们改写过后的 `mpvue.runtime`
    alias: {
      'vue': 'mpvue',      // 这样就可以在项目中直接使用 `import Vue from vue `
      '@': resolve('src')  // 创建 `import` 或 `require`的别名. 来确保模块引用更简单;
    },
    symlinks: false,
    aliasFields: ['mpvue', 'weapp', 'browser'], // 指定解析规则
    mainFields: ['browser', 'module', 'main']  //
  },
  module: {
    rules: [
      // 对`*.js / *.vue`文件进行基本的语法规则检查
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      // 把 /\.vue$/ 后缀文件修改 vue-loader 为 mpvue-loader
      {
        test: /\.vue$/,
        loader: 'mpvue-loader',
        options: vueLoaderConfig
      },
      // 更新 /\.js$/ rule 的 loader,  给所有 js 后缀文件增加 mpvue-loader，并且需要加 options
      {
        test: /\.js$/,
        include: [resolve('src'), resolve('test')],
        use: [
          'babel-loader',
          {
            loader: 'mpvue-loader',
            options: {
              checkMPEntry: true
            }
          },
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[ext]')
        }
      }
    ]
  },
  plugins: [
    new MpvuePlugin(),
    new CopyWebpackPlugin([{
      from: '**/*.json',
      to: ''
    }], {
      context: 'src/'
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: path.resolve(__dirname, '../dist/static'),
        ignore: ['.*']
      }
    ])
  ]
}
