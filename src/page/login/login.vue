<template>
    <div class="login">
        <div id="head"></div>
        <div id="middle">
            <form method="post">
                <ul style="text-align: center;">
                    <li style="font-size: 48px">登录</li>
                    <li><input class="name" name="username" v-model="user.userName" placeholder="请输入用户名"></li>
                    <li><input type="password" name="password" v-model="user.password" class="pwd" placeholder="请输入密码"></li>
                    <!-- <li id="verifyCode" style="display: block;"><input id="valid" name="rand" placeholder="请输入验证码" maxlength="4">
                            <span id="validcode">
                                 <img id="verifyCodePic" id="img_captcha" src="/../../assets/jcaptcha.jpg" > 
                            </span>
                            <span id="changeimg">换一张</span>
                        </li> -->
                    <li>
                        <button id="login" @click.prevent="login()">立即登录</button>
                    </li>
                    <li>
                        <span id="err" style="display: inline-block;">{{msg}}</span>
                    </li>
                </ul>
            </form>
        </div>
        <div id="footer">
            <a>关于我们@qq50330690 &nbsp &nbsp|&nbsp &nbsp</a>
            <a>Copyright © 2017 刘江涛 保留所有权利 沪ICP备110号-1</a>
        </div>
        <div id="cloud"></div>
    </div>
</template>

<script>
import * as require from '../../axios/api';
import {mapGetters, mapActions} from 'vuex';
export default {
    name: 'login',
    data() {
        return {
            user:{
                userName:'',
                password:''
            },
            msg: ''
        }
    },
    computed: {
      //实时计算
      ...mapGetters(['token','loginStatus']),
    },
    methods: {
        ...mapActions({setToken: 'login',clearToken:'loginOut'}),
        async login() {
            console.log(this.token,this.loginStatus)
            let res = await require.login(this.user);
            console.log(res)
            if(res.state==true){
            console.log(this.$store.state)
                this.setToken(res)
                window.location.href = '#/main'
            }else{
                this.msg = res.msg;
            }
        }
    }
}
</script>

<style scoped>

.login {
    background: url(../../assets/bg.png) repeat-x;
    height: 100%;
    min-height: 600px;
    position: relative;
}

a {
    text-decoration: none;
    color: rgba(255, 255, 255);
    cursor: pointer;
}

.name,
.pwd {
    width: 310px;
    height: 44px;
    line-height: 44px;
    padding-left: 15px;
    outline: none;
    border-radius: 20px;
    background-color: #0A3C78;
    border: 1px solid #329BE0;
}

.name:hover,
.pwd:hover,
.name:focus,
.pwd:focus {

    background-color: #052b64;
}

#login {

    background: #3fb9ff;
    font-size: 18px;
    width: 329px;
    height: 44px;
    outline: none;
    color: white;
    background: -webkit-linear-gradient(#3fb9ff, #099be7, #229de3);
    background: -o-linear-gradient(#3fb9ff, #099be7, #229de3);
    background: -moz-linear-gradient(#3fb9ff, #099be7, #229de3);
    background: linear-gradient(#3fb9ff, #099be7, #229de3);
    border-radius: 20px;
}

#login:hover {
    background: -webkit-linear-gradient(#229de3, #099be7, #3fb9ff);
    background: -o-linear-gradient(#229de3, #099be7, #3fb9ff);
    background: -moz-linear-gradient(#229de3, #099be7, #3fb9ff);
    background: linear-gradient(#229de3, #099be7, #3fb9ff);
}

#head {
    height: 50px;
    padding-top: 25px;
    margin-left: 14px;
    z-index: 1;
}

#middle {
    position: fixed;
    top: 175px;
    width: 100%;
    z-index: 1;
    /* height:600px; */
}

#footer {
    text-align: center;
    bottom: 15px;
    position: absolute;
    width: 100%;

    z-index: 1;
}

#footer a {
    color: black;
}

#middle li {
    list-style-type: none;
    margin-top: 15px;
}

#cloud {
    background: url(../../assets/cloud.png) repeat;
    width: 100%;
    height: 356px;
    position: fixed;
    bottom: 0px;
    -webkit-animation: cloud 60s linear infinite alternate;
    -moz-animation: clouds 60s linear infinite alternate;
    z-index: 0;
}

@-webkit-keyframes cloud {
    0% {
        background-position: top left
    }
    100% {
        background-position: top right
    }
}

@-moz-keyframes clouds {
    0% {
        background-position: top left
    }
    100% {
        background-position: top right
    }
}

#err {
    display: none;
    color: red;
}

#valid {
    height: 44px;
    width: 150px;
    text-indent: 1em;
    vertical-align: middle;
    line-height: 46px;
    outline: none;
    border-radius: 20px;
    background-color: #0A3C78;
    border: 1px solid #329BE0;
}

#validcode {
    display: inline-block;
    width: 100px;
    height: 30px;
    margin-left: 5px;
    vertical-align: middle;
}

#changeimg {
    margin-left: 15px;
    cursor: pointer;
}
</style>