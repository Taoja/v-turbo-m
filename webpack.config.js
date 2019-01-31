const VueLoaderPlugin = require('vue-loader/lib/plugin')

const path = require('path')
function resolve (e) {
  return path.resolve(__dirname, e)
}

const readConf = require('./build/readConf')

const config = {
  dir: __dirname,
  static: {
    path: 'config.default.env[env].static',
    publicPath: "isDev ? '../../' : 'http://'"
  },
  default: {
    output: 'dist',
    resolve: {
      extensions: ['.js', '.vue', '.json', '.scss'],
      alias: {
        '@': resolve('src'),
        '@s': resolve('src/common/scss'),
        '@j': resolve('src/common/js'),
        '@a': resolve('src/assets'),
        '@c': resolve('src/components')
      },
    },
    externals: {
      'vue': 'window.Vue',
    },
    env: {
      sit: {
        static: 'cn-hangzhou-mdsweb.cloud.alipay.com/98F6BCD302124_sit',
      },
      uat: {
        static: '112.72.12.31:80/98F6BCD302124_uat',
      }
    },
    global: {
      FrameWork: {
        Github: 'https://github.com/Taoja/v-turbo-mpaas',
        Issues: 'https://github.com/Taoja/v-turbo-mpaas/issues',
        Document: 'https://github.com/Taoja/v-turbo-mpaas'
      },
      Bridge: {
        Github: 'https://github.com/Taoja/v-turbo-bridge',
        Issues: 'https://github.com/Taoja/v-turbo-bridge/issues',
        Document: 'https://github.com/Taoja/v-turbo-bridge'
      },
      Turbo: {
        Homepage: 'https://github.com/Taoja/v-turbo-mpaas',
        Desk: 'https://github.com/Taoja/v-turbo-mpaas/issues',
        Document: 'https://github.com/Taoja/v-turbo-mpaas'
      }
    },
    packageID: {
      static: 20180000,
      hello: 20180101
    },
    plugins: [
      new readConf(),
      new VueLoaderPlugin(), //vue加载器
    ],
    loader: [
      {
        test: /\.(jpg|png|svg|gif|jpeg|woff2|woff|eot|ttf|tof|svg)$/,
        use: [
          {
            loader: 'url-loader', //url解析器
          }
        ]
      },
      {
        test: /\.(css|scss)$/, //css解析器
        use: ['style-loader', 'css-loader', {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            plugins: [
              require('autoprefixer')({
                  browsers: ['iOS >= 7', 'Android >= 4.1']
              })
            ]
          }
        }]
      },
      {
        test: /\.stylus$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        },{
          loader: "stylus-loader"
        }]
      },
      {
        test: /\.scss$/,//sass解析器
        loader: ['sass-loader']
      },
      {
        test: /\.vue$/, //vue解析器
        loader: ['vue-loader']
      },
      {
        test: /\.js$/, //babel
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  dev: {
    port: 8082,
    host: '0.0.0.0',
    devtool: 'eval',
    open: '/hello/turbo/index.html'
  },
  build: {
    devtool: 'source-map'
  }
}

module.exports = config