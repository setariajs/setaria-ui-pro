import { config as setariaConfig, Http, ServiceError, store, storeTypes, util } from 'setaria';

/**
 * 处理Bd服务的异常
 * @param  {Array} exceptions 服务端异常
 * @param  {Array} reason
 * @return {ServiceError} 客户端异常
 */
function createAppErrByServerException(exceptions, reason) {
  let ret = null;
  let errorId = 'MAM007E';
  let errorParam = null;
  let errorMessage = null;
  // 系统异常的场合
  if (exceptions.some(item => item.id === 'SEMSG-DEFAULT')) {
    errorId = 'MAM001E';
  // 鉴权失败的场合
  } else if (exceptions.some(item => item.id === 'SEMSG-AUTH-FAIL')) {
    errorId = 'MAM005E';
  // 登录状态超时的场合
  } else if (exceptions.some(item => item.id === 'SEMSG-TIMEOUT')) {
    errorId = 'MAM002E';
  // 其它的场合
  } else {
    errorId = exceptions[0].id;
    errorParam = null;
    errorMessage = exceptions[0].message;
  }
  ret = new ServiceError(errorId, reason, errorParam, errorMessage);
  return ret;
}

/**
 * 创建Get请求的Url
 * @param  {String}  serviceId  服务路径(除去主域名外的其他部分)
 * @param  {Array}   serviceParam 服务参数信息
 * @return {String}
 */
function createGetUrl(serviceId, serviceParam) {
  // Url
  const requestData = JSON.stringify(serviceParam);
  return `${serviceId}/${requestData}`;
}

// 服务正常执行成功的状态码
const SERVICE_EXEC_SUCCESS_CODE = 0;

export default class UmeHttp {
  /**
   * 调用指定服务
   * @param  {String}  serviceId  服务路径(除去主域名外的其他部分)
   * @param  {Array}   serviceParam 服务参数信息
   * @param  {Object}  config       服务配置信息（isShowError[Boolean] 是否显示异常）
   * @return {Promise} Promise
   */
  static invoke(serviceId, serviceParam = [], config = {}) {
    const umeConfig = config;
    // Headers
    if (util.isEmpty(umeConfig.headers)) {
      umeConfig.headers = {};
    }
    umeConfig.headers.TOKEN = store.getters[storeTypes.GET_TOKEN];
    // Url
    let url = setariaConfig.env.SERVICE_URL + serviceId;
    // 默认使用POST
    const method = util.isEmpty(umeConfig.method) ? 'post' : umeConfig.method;
    // GET的场合，创建GET请求的URL
    if (method.toLowerCase() === 'get') {
      url = createGetUrl(url, serviceParam);
    }
    // 超时时间
    if (umeConfig.timeout === undefined || umeConfig.timeout === null) {
      // 设置默认值
      umeConfig.timeout = setariaConfig.env.SERVICE_TIME_OUT;
    }
    if (util.isString(umeConfig.timeout)) {
      umeConfig.timeout = parseInt(umeConfig.timeout, 10);
    }
    return new Promise((resolve, reject) => {
      // 调用指定服务
      Http[method](url, serviceParam, umeConfig).then((res) => {
        const resData = res.data;
        // 收到错误信息的场合
        if (resData.resultCode !== SERVICE_EXEC_SUCCESS_CODE) {
          const exceptions = util.isEmpty(resData.exceptions) ?
            [] : resData.exceptions;
          const error = createAppErrByServerException(exceptions, {
            config: umeConfig,
          });
          reject(error);
        }
        resolve(resData.resultObject);
      }).catch((error) => {
        reject(error);
      });
    });
  }

  /**
   * 同时通过异步的方式调用多个服务
   * @param  {Array}   promiseArr  Promise数组
   * @return {Promise}
   */
  static invokeAll(promiseArr) {
    return Http.all(promiseArr);
  }
}
