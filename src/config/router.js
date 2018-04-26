import Main from '@/page/Main';
import Login from '@/page/Login';
import PageNotFound from '@/page/PageNotFound';
import Analysis from '@/page/dashboard/Analysis';
import Dashboard from '@/page/dashboard/Dashboard';
import Form from '@/page/form/Form';
import BasicForm from '@/page/form/BasicForm';
import DynamicForm from '@/page/form/DynamicForm';
import List from '@/page/list/List';
import DynamicList from '@/page/list/DynamicList';

export default {
  middleware: ['auth', 'title'],
  routes: [
    {
      path: '/login',
      name: 'Login',
      meta: { auth: false },
      component: Login,
    },
    {
      path: '/',
      name: 'Main',
      meta: { title: '首页' },
      component: Main,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          meta: { title: 'dashboard' },
          component: Dashboard,
          children: [
            {
              path: 'analysis',
              name: 'Analysis',
              meta: { title: '分析页' },
              component: Analysis,
            },
          ],
        },
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
