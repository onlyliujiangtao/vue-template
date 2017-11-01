// 引入mock
import Mock from 'mockjs';

Mock.mock('/login', 'post', request => {
    let result = {
        state: '',
        msg: ''
    };
    let user = JSON.parse(request.body)
    if(user.userName=='admin'){
        if(user.password=='123456'){
            result = {
                state: true,
                userInfo:{userName:'张三'},
                token:'sdjfkdsjkjkjds3k24234',
                msg: false
            }
        }else{
            result = {
                state: false,
                msg: '密码错误'
            }
        }
    }else{
        result = {
            state: false,
            msg: '账户不存在'
        }
    }
    return result;
});
Mock.mock('/loginOut', {
    state:true,
    msg:'注销成功'
});

