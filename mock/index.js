export default {
  'GET /api/user': {
    name: 'Poly',
  },
  'GET /api/users': [
    {
      name: '管理员',
      gender: '男',
      mobile: '13910000001',
      birth: '1979-03-08',
      activeFlag: '有效',
    },
    {
      name: '赵三',
      gender: '男',
      mobile: '13910000002',
      birth: '1982-08-19',
      activeFlag: '无效',
    },
    {
      name: '李四',
      gender: '男',
      mobile: '13910000003',
      birth: '1985-08-19',
      activeFlag: '无效',
    },
  ],
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
