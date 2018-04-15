import Dashboard from '@/page/Dashboard';
import Login from '@/page/Login';
import PageNotFound from '@/page/PageNotFound';
import Form from '@/page/form/Form';
import BasicForm from '@/page/form/BasicForm';
import DynamicForm from '@/page/form/DynamicForm';
import List from '@/page/list/List';
import DynamicList from '@/page/list/DynamicList';

export default {
  middleware: 'auth',
  routes: [
    {
      path: '/login',
      name: 'Login',
      meta: { auth: false },
      component: Login,
    },
    {
      path: '/',
      name: 'Dashboard',
      meta: { title: '首页' },
      component: Dashboard,
      children: [
        {
          path: 'list',
          name: 'List',
          meta: { title: '列表页', show: false },
          component: List,
          children: [
            {
              path: 'dynamic-list',
              name: 'DynamicList',
              meta: { title: '动态列表' },
              component: DynamicList,
            },
          ],
        },
        {
          path: 'form',
          name: 'Form',
          meta: { title: '表单页', show: false },
          component: Form,
          children: [
            {
              path: 'basic-form',
              name: 'BasicForm',
              meta: { title: '基础表单' },
              component: BasicForm,
            },
            {
              path: 'dynamic-form',
              name: 'DynamicForm',
              meta: { title: '动态表单' },
              component: DynamicForm,
            },
          ],
        },
      ],
    },
    {
      path: '*',
      component: PageNotFound,
    },
  ],
};
