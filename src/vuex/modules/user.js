import * as types from '../types'
const state = {
  // 用户登录状态,存储在localstorage中，防止刷新后没了
  loginStatus: localStorage.getItem('loginStatus') ? JSON.parse(localStorage.getItem('loginStatus')) : false,
  // 用户登录信息
  userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : {},
  token: localStorage.getItem('token')?localStorage.getItem('token'):''
};

const actions = {
  /**
   * 用户登录
   */
  setUserInfo({commit}, res) {
    localStorage.setItem('userInfo', JSON.stringify(res));
    localStorage.setItem('loginStatus', true);
    commit(types.SET_USER_INFO, res);
    commit(types.SET_LOGIN_STATUS, true);
    console.log('登录');
  }, 
  /**
   * token设置
   */
  setToken({commit},token){
    localStorage.setItem('token', token);
    localStorage.setItem('loginStatus', true);
    commit(types.SET_TOKEN, token);
    commit(types.SET_LOGIN_STATUS, true);
    console.log('设置成功');
  },
  clearToken({commit},token){
    localStorage.setItem('token', token);
    localStorage.setItem('loginStatus', false);
    commit(types.SET_TOKEN, '');
    commit(types.SET_LOGIN_STATUS, false);
    console.log('清楚成功');
  },
  /**
   * 退出登录
   */
  setSignOut({commit}) {
    localStorage.removeItem('token')
    localStorage.removeItem('loginStatus');
    localStorage.removeItem('userInfo');
    commit(types.SET_LOGIN_STATUS, false);
    commit(types.SET_USER_INFO, {});
    console.log('登出');
  }
};

const getters = {
  loginStatus: state => state.loginStatus,
  userInfo: state => state.userInfo,
  token: state => state.token
};

const mutations = {
  [types.SET_USER_INFO](state, res) {
    state.userInfo = res;
  },

  [types.SET_LOGIN_STATUS](state, status) {
    state.loginStatus = status;
  },
  [types.SET_TOKEN](state,token){
      state.token = token;
  }
};

export default {
  state, //状态
  actions, //提交mutations,可做异步操作
  getters, //对数据进行一些操作
  mutations//对状态做更改（同步）
};