import Setaria from 'setaria';
import MockAdapter from 'axios-mock-adapter';

let httpInstance = null;
let mockInstance = null;

function setInstance() {
  httpInstance = Setaria.getHttp().api;
  mockInstance = new MockAdapter(httpInstance);
}

function getInstance() {
  if (mockInstance === null) {
    setInstance();
  }
  return mockInstance;
}

function writeLogToBrowserConsole(url, reqData = 'null', resCode, resData) {
  // 浏览器控制台支持分组函数的场合
  if (console.group && console.groupEnd) {
    console.group(`Mock URL: ${url}`);
    // request start
    console.group('request');
    // request data start
    console.group('data');
    console.log(reqData);
    // request data end
    console.groupEnd();
    // request end
    console.groupEnd();
    // response start
    console.group('response');
    // response status start
    console.group('statusCode');
    console.log(resCode);
    // response status end
    console.groupEnd();
    // response data start
    console.group('data');
    console.log(resData);
    // response data end
    console.groupEnd();
    // response end
    console.groupEnd();
    console.groupEnd();
  } else {
    console.log(`%cMock URL: ${url}`, 'font-weight: 800');
    // request
    console.log('%crequest', 'font-weight: 800');
    console.log('%cdata', 'font-weight: 800');
    console.log(reqData);
    // response
    console.log('%cresponse', 'font-weight: 800');
    // status
    console.log('%cstatusCode', 'font-weight: 800');
    console.log(resCode);
    // data
    console.log('%cdata', 'font-weight: 800');
    console.log(resData);
  }
}

/**
 * 为了消除eslint错误
 */
function logJSONParseError() {
}

function outputMockProcessData({
  baseURL = '/',
  data,
  method,
  params,
  url,
}, responseData) {
  let requestData = data;
  try {
    if (method.toLowerCase() === 'get') {
      requestData = params;
    } else {
      requestData = JSON.parse(data);
    }
  } catch (e) {
    logJSONParseError(e);
  }
  if (responseData instanceof Promise) {
    responseData.then(([promiseResCode, promiseResData]) => {
      writeLogToBrowserConsole(baseURL + url, requestData, promiseResCode, promiseResData);
    });
  } else {
    const [resCode, resData] = responseData;
    writeLogToBrowserConsole(baseURL + url, requestData, resCode, resData);
  }
}

function getMockAdapterFunction(key) {
  let execFunctioName = '';
  const method = key.split(' ')[0].toLowerCase();
  switch (method) {
    case 'get':
      execFunctioName = 'onGet';
      break;
    case 'post':
      execFunctioName = 'onPost';
      break;
    case 'put':
      execFunctioName = 'onPut';
      break;
    case 'delete':
      execFunctioName = 'onDelete';
      break;
    default:
      execFunctioName = 'onAny';
  }
  return (mockFunction) => {
    getInstance()[execFunctioName](key.split(' ')[1]).reply((config) => {
      const resData = mockFunction(config);
      outputMockProcessData(config, resData);
      return resData;
    });
  };
}

function createMock(key, apiResponse) {
  const mockFunction = getMockAdapterFunction(key);
  mockFunction((config) => {
    let res = apiResponse;
    if (typeof apiResponse === 'function') {
      res = apiResponse(config);
    }
    return res;
  });
}

export function init(mockConfig) {
  if (mockConfig) {
    Object.keys(mockConfig).forEach((key) => {
      createMock(key, mockConfig[key]);
    });
  }
}

export function delay(mockConfig, delayMillisecond) {
  Object.keys(mockConfig).forEach((key) => {
    const mockFunction = getMockAdapterFunction(key);
    let resMockData = mockConfig[key];
    if (typeof mockConfig[key] === 'object') {
      resMockData = [200, resMockData];
      mockFunction(() => {
        const promise = new Promise((resolve) => {
          setTimeout(() => {
            resolve(resMockData);
          }, delayMillisecond);
        });
        return promise;
      });
    } else if (typeof mockConfig[key] === 'function') {
      mockFunction((config) => {
        const promise = new Promise((resolve) => {
          setTimeout(() => {
            resolve(resMockData(config));
          }, delayMillisecond);
        });
        return promise;
      });
    }
  });
}

export default {};
