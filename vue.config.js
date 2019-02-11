module.exports = {
  baseUrl: '/', // 即页面进入时候显示的路径 如：设置成/index  ->  localhost:8080/index/   
  outputDir: 'dist', // 运行时生成的生产环境构建文件的目录(默认''dist''，构建之前会被清除)
  assetsDir: 'public', //放置生成的静态资源(s、css、img、fonts)的(相对于 outputDir 的)目录(默认'')
  // lintOnSave: false, // eslint是否在保存的时候开启检测
  devServer: {
    // 所有 webpack-dev-server 的选项都支持。
    host: '0.0.0.0', //指定网址ip,可以写成localhost
    port: 8090,
    https: false,
    hotOnly: false, //webpack的server已经启动了热更新，不需要使用vue的热更新，所以false
    open: false, //配置自动启动浏览器
    proxy: {
      // 配置跨域代理
      '/api': { // /api就是target的局部变量了 如：/api/index  -> http://localhost:3000/api/index
        target: 'http://localhost:3000',
        ws: true, //是否代理websockets
        changeOrigin: true, //将主机标头的原点更改为目标URL，实现跨域的主要手段（使得本地虚拟服务器会发送请求）
        pathRewrite: {
          '^/api': ''  // /api/index -》 http://192.168.1.248:9888/index
          // '^/api': '/api'  // /api/index -》 http://192.168.1.248:9888/api/index
        }
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    }
  }
}

