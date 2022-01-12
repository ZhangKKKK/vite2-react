import axios from 'axios'

// 创建 axios 实例
const service = axios.create({
  baseURL: '', // api base_url
  timeout: 1000 * 60 * 3 // 请求超时时间
})

service.defaults.headers.post['Content-Type'] = 'application/json'
service.defaults.transformRequest = [function (data) {
  if (data) {
    data = JSON.stringify(data)
  }
  return data
}]
const err = (error) => {
  return Promise.reject(error)
}

// 请求拦截
service.interceptors.request.use(config => {
  console.log(config)
  if (config.headers['Content-Type'] === 'multipart/form-data') {
    config.transformRequest = [function (data) {
      // 对 data 进行任意转换处理
      return data
    }]
  }
  const token = ''
  if (token) {
    config.headers['Authorization'] = token // 让每个请求携带自定义 token 请根据实际情况自行修改
  }
  // 处理公共参数
  if (token) {
    // config.data['UserId'] = store.state.user.user_id
  }
  return config
}, err)

// 响应拦截
service.interceptors.response.use((response) => {
  return response.data
}, err)


export {
  service as axios
}
