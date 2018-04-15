import { util } from 'setaria';
import { Message, MessageBox, Notification } from 'setaria-ui';

/* eslint class-methods-use-this: ["error",
  { "exceptMethods": ["getTitleByMessageType"] }] */
class Notice {
  /**
   * 根据消息类型取得通知窗口标题
   * @param  {String} type 消息类型
   * @return {String} 通知窗口标题
   */
  static getTitleByMessageType(type) {
    let ret = '';
    switch (type) {
      case 'error':
        ret = '错误';
        break;
      case 'warning':
        ret = '警告';
        break;
      case 'info':
        ret = '提示';
        break;
      default:
        ret = '错误';
    }
    return ret;
  }

  /**
   * 显示消息提示
   * 主要用于主动操作后的反馈提示（譬如用户新增成功或删除成功等情况）
   * @param  {String}   options.type     消息类型
   * @param  {String}   options.message  消息内容
   * @param  {Number}   options.duration 显示时间, 毫秒。设为 0 则不会自动关闭
   * @param  {Function} options.onClose  关闭时的回调函数
   * @return {Notification} Notification 实例 用于调用实例上的close函数关闭当前的Notification
   */
  static showMessage(
    { type = 'error', message = '' },
    { duration = 3000, onClose = null } = {},
  ) {
    const msg = util.isObject(message) ? message.toString() : message;
    Message({
      type,
      title: Notice.getTitleByMessageType(type),
      message: msg,
      duration,
      onClose,
    });
  }

  /**
   * 显示消息提示框
   * @param  {String}         options.type       消息类型，用于显示图标
   * @param  {String|Message} options.message    消息内容
   * @param  {Boolean}        showConfirmButton  是否显示确定按钮
   * @param  {Boolean}        showCancelButton   是否显示取消按钮
   * @param  {Boolean}        closeOnClickModal  是否可通过点击遮罩关闭 MessageBox
   * @param  {Boolean}        closeOnPressEscape 是否可通过按下 ESC 键关闭 MessageBox
   * @param  {String}         confirmButtonText  确定按钮的文本内容
   * @param  {String}         cancelButtonText   取消按钮的文本内容
   * @return {MessageBox}
   */
  static showMessageBox({
    type = 'warning',
    message = '',
    showConfirmButton = true,
    showCancelButton = true,
    closeOnClickModal = false,
    closeOnPressEscape = false,
    confirmButtonText = '确定',
    cancelButtonText = '取消',
  } = {}) {
    const msg = util.isObject(message) ? message.toString() : message;
    return new Promise((resolve, reject) => {
      MessageBox({
        title: Notice.getTitleByMessageType(type),
        type,
        message: msg,
        showConfirmButton,
        showCancelButton,
        closeOnClickModal,
        closeOnPressEscape,
        confirmButtonText,
        cancelButtonText,
      }).then((res) => {
        resolve(res);
      }).catch((error) => {
        reject(error);
      });
    });
  }

  /**
   * 关闭消息提示框
   */
  static hideMessageBox() {
    MessageBox.close();
  }

  /**
   * 显示通知
   * 主要用于系统级通知的被动提醒（譬如服务调用出现异常等情况）
   * @param  {String}   options.type     消息类型
   * @param  {String}   options.message  消息内容
   * @param  {Number}   options.duration 显示时间, 毫秒。设为 0 则不会自动关闭
   * @param  {Function} options.onClose  关闭时的回调函数
   * @return {Notification} Notification 实例 用于调用实例上的close函数关闭当前的Notification
   */
  static showNotify(
    { type = 'error', message = '' },
    { duration = 3000, onClose = null } = {},
  ) {
    Notification({
      type,
      title: Notice.getTitleByMessageType(type),
      message,
      duration,
      onClose,
    });
  }
}

export default Notice;
