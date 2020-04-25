module.exports = {
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: {
      '/activity': {
        target: 'https://www.imooc.com',
        // 默认值：false-将主机标头的来源更改为目标URL
        changeOrigin: true,
        // 重写目标的url路径
        pathRewrite: { '/activity': '/activity' }
      }
    }
  }
}
