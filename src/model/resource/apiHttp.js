import Setaria from 'setaria';
import { get as getVal, isEmpty } from '@/model/util';

/**
 * 抛出异常处理
 *
 * @param  {Object} error 拥有message键值的对象
 */
function throwError(error) {
  throw error;
}

/**
  * 调用指定服务
  * @param  {String}  serviceId    服务ID
  * @param  {Array}   serviceParam 服务参数信息
  * @param  {Object}  config       服务配置信息（isShowError[Boolean] 是否显示异常）
  * @return {Promise} Promise
  */
async function invoke(serviceId, serviceParam = [], config = {}) {
  const httpConfig = config;
  // const store = Setaria.getStore();
  // Headers
  if (isEmpty(httpConfig.headers)) {
    httpConfig.headers = {};
  }
  // httpConfig.headers.TOKEN = store.getters['common/token'];
  // httpConfig.headers['RESOURCE-ID'] = store.getters['auth/resourceId'];
  // 默认使用POST
  const method = isEmpty(httpConfig.method) ? 'post' : httpConfig.method;
  return new Promise((resolve, reject) => {
    // 调用指定服务
    Setaria.getHttp().api[method](serviceId, serviceParam, httpConfig).then((res) => {
      const resData = res.data;
      resolve(resData);
    }).catch((error) => {
      const e = error;
      const message = getVal(e, 'detail.response.data.error');
      if (!isEmpty(message)) {
        e.noIdMessage = message;
      }
      if (config.isShowError === false) {
        reject(e);
      } else {
        throwError(e);
      }
    });
  });
}

/**
  * 同时通过异步的方式调用多个服务
  * @param  {Array}   promiseArr  Promise数组
  * @return {Promise}
  */
async function all(promiseArr) {
  return Setaria.getHttp().defaults.all(promiseArr);
}

/**
  * 通过GET方式调用指定服务
  * @param {*} serviceId
  * @param {*} serviceParam
  * @param {*} config
  */
async function get(serviceId, serviceParam = [], config = {}) {
  const c = config;
  c.method = 'get';
  return invoke(serviceId, serviceParam, c);
}

/**
  * 通过POST方式调用指定服务
  * @param {*} serviceId
  * @param {*} serviceParam
  * @param {*} config
  */
async function post(serviceId, serviceParam = [], config = {}) {
  const c = config;
  c.method = 'post';
  return invoke(serviceId, serviceParam, c);
}

/**
  * 通过PUT方式调用指定服务
  * @param {*} serviceId
  * @param {*} serviceParam
  * @param {*} config
  */
async function put(serviceId, serviceParam = [], config = {}) {
  const c = config;
  c.method = 'put';
  return invoke(serviceId, serviceParam, c);
}

/**
  * 通过DELETE方式调用指定服务
  * @param {*} serviceId
  * @param {*} serviceParam
  * @param {*} config
  */
async function execDelete(serviceId, serviceParam = [], config = {}) {
  const c = config;
  c.method = 'delete';
  return invoke(serviceId, serviceParam, c);
}

export default {
  all,
  get,
  post,
  put,
  delete: execDelete,
};
