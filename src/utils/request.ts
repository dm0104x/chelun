import axios from 'axios'
// create an axios instance
const service = axios.create({
  baseURL: /https:\/\/jasonandjay.com/.test(window.location.origin) ? 'https://exam.jasonandjay.com/' : "http://baojia.chelun.com/",
  // withCredentials: true, // 跨域请求时发送 cookies
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    //判断是否登录状态
    config.headers["Content-Type"] = 'application/x-www-form-urlencoded'

    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => response.data,
  error => {
    return Promise.reject(error)
  }
)

export default service