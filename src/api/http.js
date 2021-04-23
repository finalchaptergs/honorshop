import axios from 'axios'

//请求拦截器
axios.interceptors.request.use((ret)=>{
    return ret.data||ret
})
//响应拦截器
axios.interceptors.response.use((ret)=>{
    return ret
})

export default axios