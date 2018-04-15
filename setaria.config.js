import message from '@/config/message.json';
import router from '@/config/router';

export default {
  env: {
    // 远程服务根Url
    SERVICE_URL: '/ume-ems/rest/s01/',
    // 应用程序标题
    APP_TITLE: 'Setaria UI Pro',
    // 远程服务调用超时时间
    SERVICE_TIME_OUT: 60000,
    STORAGE_KEY: '__SETARIA_UI_PRO_STORAGE_',
    // Overlay
    LOADING_TEXT: '加载中',
    // 查询结果表格每页默认结果集
    TABLE_PAGE_SIZE: 10,
  },
  message,
  router,
};
