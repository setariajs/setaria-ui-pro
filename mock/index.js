import mockjs from 'mockjs';

const users = mockjs.mock({
  'list|10': [
    {
      name: '@cname',
      'gender|1': ['男', '女'],
      mobile: '13@natural(100000000)',
      birth: '@date',
      'activeFlag|1': ['有效', '无效'],
    },
  ],
}).list;

export default {
  'GET /api/user': {
    name: 'Poly',
  },
  'GET /api/tasks': mockjs.mock({
    'list|1-5': [
      {
        'id|1-100': 1,
        avatar: '@image("48x48", "@color")',
        'owner|1': users,
        title: '@ctitle',
        description: '@csentence',
        startDateTime: '@datetime',
        'percent|0.1-2': 1,
        'status|0-1': 0,
      },
    ],
  }).list,
  'GET /api/users': users,
  'POST /api/login': (config) => {
    const { data } = config;
    const { username, password } = JSON.parse(data);
    if (username === 'admin' && password === '123456') {
      return [200, {
        token: '12c02nx0n20dn2038',
      }];
    }
    return [401, {
      error: '用户名密码错误',
    }];
  },
  'POST /api/logout': () => [200, {}],
};
