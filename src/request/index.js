import JumRequest from './request'
// 请求拦截器
const requestInterceptors = {
  success(value) {
    // 加载
    return value
  },
  error(err) {
    return err
  }
}

// 响应拦截器
const responseInterceptors = {
  success(value) {
    // 取消加载
    return value
  },
  error(err) {
    // 取消加载
    return err
  }
}

export default new JumRequest({
  // baseURL: 'http://127.0.0.1:8800',
  requestInterceptors,
  responseInterceptors
})
