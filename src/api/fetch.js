import axios from 'axios'

const service = axios.create({
  baseURL: process.env.BASE_URL,   // api的base_url
  timeout: 5000                    // 请求超时时间
})

// 拦截氢请求
service.interceptors.request.use(config => {
  config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
  return config
})

// 拦截响应
service.interceptors.response.use(
  response => {
    return response
  }
  ,
  error => {
    /* Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    }); */
    return Promise.reject(error)
  }
)

export default service
