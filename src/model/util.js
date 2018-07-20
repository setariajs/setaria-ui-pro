import _ from 'lodash';
import moment from 'moment';
import 'moment/locale/zh-cn';

export function getPublicResourceUrl(val) {
  return `${process.env.BASE_URL}${val}`;
}

export function getConfigValue(val) {
  return process.env[`VUE_APP_${val}`];
}

/**
  * 判断当前执行环境是否为生产环境
  * @return {Boolean} 生产环境的场合，返回true
  */
export function isProdunctionEnv() {
  return process.env.NODE_ENV === 'production';
}

/**
  * 检查输入值是否为空
  * 注意：无法判断基本类型（整数，布尔）
  */
export function isEmpty(value) {
  return _.isEmpty(value);
}

export function isFirefox() {
  const agent = window.navigator.userAgent.toLowerCase();
  return (typeof window !== 'undefined' && agent) &&
    /firefox\/\d+/.test(agent);
}

/**
  * 使用指定格式取得当前时间
  * @param  {String} format 指定格式（moment格式）
  * @return {String} 当前时间
  */
export function getNow(format = 'LL') {
  return moment().format(format);
}

/**
  * 对日期使用指定格式进行格式化
  */
export function formatDate(date, format = 'YYYY-MM-DD') {
  let ret = '';
  if (moment(date).isValid() && date !== undefined) {
    ret = moment(date).format(format);
  }
  return ret;
}

/**
  * 字符串类型日期转换成日期对象
  */
export function toDate(val) {
  let ret = val;
  if (!isEmpty(val)) {
    ret = moment(val).toDate();
  }
  return ret;
}

/**
  * 对时间进行加法计算
  * 例：addDateTime(new Date(), 7, 'days')
  */
export function addDateTime(date, val, type) {
  return moment(date).add(val, type);
}

/**
  * 对时间进行减法计算
  * 例：subtractDateTime(new Date(), 7, 'days')
  */
export function subtractDateTime(date, val, type) {
  return moment(date).subtract(val, type);
}

/**
  * 判断两个输入值值是否相等
  * 主要用于对数组或对象进行判断
  */
export function isEqual(value, other) {
  return _.isEqual(value, other);
}

/**
  * 检查输入值是否为数字
  */
export function isNumber(value) {
  return _.isNumber(value);
}

/**
  * 检查输入值是否为字符串
  */
export function isString(value) {
  return _.isString(value);
}

/**
  * 检查输入值是否为日期
  */
export function isDate(value) {
  return _.isDate(value);
}

/**
  * 检查输入值是否为数组
  */
export function isArray(value) {
  return _.isArray(value);
}

/**
  * 检查输入值是否为对象
  */
export function isObject(value) {
  return _.isObject(value);
}

/**
  * 检查输入值是否为函数
  */
export function isFunction(value) {
  return _.isFunction(value);
}

/**
  * 取得对象中指定的值
  */
export function get(object, path, defaultValue = null) {
  return _.get(object, path, defaultValue);
}

/**
  * 对指定对象进行深拷贝
  */
export function cloneDeep(objects) {
  return _.cloneDeep(objects);
}

/**
  * 取得url中指定参数的值
  */
export function getUrlParameter() {
  // const urlParam = window.location.search.substring(1)
  // const urlVariables: Array<string> = urlParam.split('&')
  // let ret = urlVariables.find(key => key.split('=')[0] === paramKey)
  // if (ret === null || ret === undefined) {
  //   ret = '';
  // } else {
  //   ret = ret.split('=')[1];
  // }
  // return ret
}

export function findResourceByRoute(resourceList, route) {
  let targetResource = null;

  function findResourceByRouteName(rList, name) {
    return rList.some((item) => {
      if (item.link === name) {
        targetResource = item;
        return true;
      } else if (isArray(item.children)) {
        return findResourceByRouteName(item.children, name);
      }
      return false;
    });
  }

  route.matched.some((r) => {
    if (findResourceByRouteName(resourceList, r.path)) {
      return true;
    }
    return false;
  });

  return targetResource;
}