
let baseURL
// process.env.NODE_ENV 获取当前nodejs进程里的环境变量
// 基于CORS的跨域
switch (process.env.NODE_ENV) {
  case 'dev':
    baseURL = 'http://dev-mall-pre.springboot.cn/api'
    break
  case 'test':
    baseURL = 'http://test-mall-pre.springboot.cn/api'
    break
  case 'prod':
    baseURL = 'http://prod-mall-pre.springboot.cn/api'
    break
  default:
    baseURL = 'http://mall-pre.springboot.cn/api'
    break
}

module.export = { baseURL }
