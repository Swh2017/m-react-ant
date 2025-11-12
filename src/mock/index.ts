import Mock from 'mockjs';

// 开启Mock调试模式
Mock.setup({
    timeout: '200-600'
});

console.log('Mock.js已初始化，开始拦截请求');

// 模拟登录接口 - 使用POST方法更符合登录场景
Mock.mock(/\/user\/login/, 'post', (options: any) => {
    console.log('Mock接收到登录请求:', options);
    // 模拟登录成功，返回token
    return {
        code: 200,
        message: '登录成功',
        data: {
            token: Mock.Random.guid(),
            userName: 'admin'
        }
    };
});

// 模拟获取用户信息接口
Mock.mock('/user/userInfo', 'get', () => {
    return {
        code: 200,
        message: 'success',
        data: {
            username: 'admin',
            permissions: ['read', 'write']
        }
    };
});

// 模拟获取用户信息接口
Mock.mock('/user/router', 'get', () => {
    return {
        code: 200,
        message: 'success',
        data: {
            routerList: [{
                path: '',
                name: '主页',
                viewPath: '/pages/home/index',
                menuList: [],
            },
            {
                path: '',
                name: '我们',
                viewPath: '/pages/about/index',
                menuList: [],
            }]
        }
    };
});

// 模拟退出登录接口
Mock.mock('/user/logout', 'post', () => {
    return {
        code: 200,
        message: '退出成功'
    };
});

export default Mock;
