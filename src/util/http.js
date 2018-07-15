import axios from 'axios'

// axios.defaults.withCredentials = true

const instance = axios.create({
    // baseURL: 'https://nodeapi.yunser.com'
    baseURL: 'http://localhost:1026'
})

instance.interceptors.request.use(
    config => {
        console.log('请求')
        // let token = storage.get('accessToken')
        // if (token) {
        //     console.log('有' + token)
        //     config.headers.Authorization = token
        // }
        return config
        // if (store.state.token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
        //     config.headers.Authorization = `token ${store.state.token}`;
        // }
    },
    err => {
        console.log('错误', err)
        return Promise.reject(err)
    })

instance.interceptors.response.use(
    response => {
        console.log('响应')
        console.log(response.data)
        return response
    },
    error => {
        console.log('错误2', error)
        if (error.response) {
            switch (error.response.status) {
                case 401: // 旌旗  灵医 , 只用[授权] 旌旗的医生 才是 灵医

                    // 返回 401 清除token信息并跳转到登录页面
                    store.commit(types.LOGOUT)
                    router.replace({
                        path: 'login',
                        query: {redirect: router.currentRoute.fullPath}
                    })
            }
        }
        return Promise.reject(error.response.data)   // 返回接口返回的错误信息
    })

export default instance
