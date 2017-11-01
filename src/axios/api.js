import axios from 'axios'
//axios设置
axios.default.timeout = 30000

if (process.env.NODE_ENV == 'development') {
    axios.defaults.baseURL = '/';// 你的接口地址
}
// post请求
export const doPost = (url, params) => {
    // if (localStorage.token) {
    //     axios.defaults.headers.post['token'] = localStorage.token;
    // } else {
    //     window.location.href = '#/login';
    // }
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(response => {
                resolve(response.data);
                // if (response.data.code == 99999) {
                //     localStorage.clear();
                //     window.location.href = '#/login';
                // }
            }, (err) => {
                console.error(err);
                let errMsg = {
                    state: false,
                    msg: err.message
                };
                resolve(errMsg);
            })
            .catch((err) => {
                console.error(err);
                let errMsg = {
                    state: false,
                    msg: err.message
                };
            });
    });
}
// ####################用户####################
// 用户登录
export const login = params => doPost('/login',params);
// 用户注销
export const loginOut = params => doPost('/loginOut',params);