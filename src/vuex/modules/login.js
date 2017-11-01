// /状态
const state = {
    token:localStorage.getItem('token')?localStorage.getItem('token'):'',
    loginStatus:localStorage.getItem('loginStatus') ? JSON.parse(localStorage.getItem('loginStatus')) : false,
    userInfo:localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : {},
}
//对数据进行一些操作
const getters = {
    token:state=>state.token,
    loginStatus:state=>state.loginStatus,
    userInfo:state=>state.userInfo
}
//对状态做更改（同步）
const mutations = {
    'USER_INFO'(state, res){
        state.userInfo = res;
    },
    'LOGIN_STATUS'(state, bool){
        state.loginStatus = bool;
    },
    'TOKEN'(state, token){
        state.token = token;
    }
}
//提交mutations,可做异步操作
const actions = {
    login({commit},res){
        localStorage.setItem('token',res.token);
        localStorage.setItem('userInfo',JSON.stringify(res.userInfo));
        localStorage.setItem('loginStatus',true);
        commit('USER_INFO',res.userInfo);
        commit('LOGIN_STATUS',true);
        commit('TOKEN',res.token);
    },
    loginOut({commit}){
        localStorage.removeItem('token');
        localStorage.removeItem('userInfo');
        localStorage.removeItem('loginStatus');
        commit('USER_INFO',[]);
        commit('LOGIN_STATUS',false);
        commit('TOKEN','');
    }
}

export default {
    state, //状态
    actions, //提交mutations,可做异步操作
    getters, //对数据进行一些操作
    mutations//对状态做更改（同步）
};