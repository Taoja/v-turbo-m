const VueLoaderPlugin = require('vue-loader/lib/plugin')

const path = require('path')
function resolve (e) {
  return path.resolve(__dirname, e)
}

const config = {
  dir: __dirname,
  static: 'config.default.env.[env].static',
  default: {
    output: 'dist',
    resolve: {
      extensions: ['.js', '.vue', '.json', '.scss'],
      alias: {
        '@': resolve('src'),
        '@s': resolve('src/common/scss'),
        '@j': resolve('src/common/js'),
        '@a': resolve('src/assets'),
        '@c': resolve('src/components'),
        '@extend': resolve('src/components/extend'),
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
    packageID: {
      static: 20180000,
      base: 20180101,
      test: 20180102
    },
    global: {
      host: 'http://cn-hangzhou-mdsweb.cloud.alipay.com'
    },
    plugins: [
      new VueLoaderPlugin(), //vue加载器
    ],
    loader: [
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
    devtool: 'eval'
  },
  build: {
    devtool: 'source-map',
    limit: 1
  }
}

module.exports = config