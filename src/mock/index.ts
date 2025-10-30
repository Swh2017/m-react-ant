import Mock from 'mockjs';

// 模拟登录接口
Mock.mock('/user/login', 'post', (options: any) => {
    const body = JSON.parse(options.body);
    // 模拟登录成功，返回token
    return {
        code: 200,
        message: '登录成功',
        data: {
            token: Mock.Random.guid(),
            username: body.username || 'admin'
        }
    };
});

// 模拟获取用户信息接口
Mock.mock('/api/userInfo', 'get', () => {
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
Mock.mock('/api/router', 'get', () => {
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
Mock.mock('/api/logout', 'post', () => {
    return {
        code: 200,
        message: '退出成功'
    };
});

export default Mock;
