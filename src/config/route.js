import Main from '@/page/Main.vue';
import Login from '@/page/Login.vue';
import PageNotFound from '@/page/PageNotFound.vue';
import checkLoginStateGuard from '@/model/guard/checkLoginStateGuard';

const Dashboard = () => import(/* webpackChunkName: "dashboard" */ '@/page/dashboard/Dashboard');
const Analysis = () => import(/* webpackChunkName: "dashboard" */ '@/page/dashboard/Analysis');
const Workplace = () => import(/* webpackChunkName: "dashboard" */ '@/page/dashboard/Workplace');

const Form = () => import(/* webpackChunkName: "form" */ '@/page/form/Form');
const BasicForm = () => import(/* webpackChunkName: "form" */ '@/page/form/BasicForm');
const DynamicForm = () => import(/* webpackChunkName: "form" */ '@/page/form/DynamicForm');
const StepForm = () => import(/* webpackChunkName: "form" */ '@/page/form/step-form/Index');
const AdvancedForm = () => import(/* webpackChunkName: "form" */ '@/page/form/AdvancedForm');
const Step1 = () => import(/* webpackChunkName: "form" */ '@/page/form/step-form/Step1');
const Step2 = () => import(/* webpackChunkName: "form" */ '@/page/form/step-form/Step2');
const Step3 = () => import(/* webpackChunkName: "form" */ '@/page/form/step-form/Step3');

const List = () => import(/* webpackChunkName: "list" */ '@/page/list/List');
const DynamicList = () => import(/* webpackChunkName: "list" */ '@/page/list/DynamicList');
const BasicList = () => import(/* webpackChunkName: "list" */ '@/page/list/basic-list/BasicList');
const TableList = () => import(/* webpackChunkName: "list" */ '@/page/list/table-list/TableList');
const CardList = () => import(/* webpackChunkName: "list" */ '@/page/list/CardList');
const Search = () => import(/* webpackChunkName: "list" */ '@/page/list/Search');
const ArticleList = () => import(/* webpackChunkName: "list" */ '@/page/list/ArticleList');
const ProjectList = () => import(/* webpackChunkName: "list" */ '@/page/list/ProjectList');
const ApplicationList = () => import(/* webpackChunkName: "list" */ '@/page/list/ApplicationList');

const Profile = () => import(/* webpackChunkName: "profile" */ '@/page/profile/Profile');
const BasicProfile = () => import(/* webpackChunkName: "profile" */ '@/page/profile/Basic');
const AdvancedProfile = () => import(/* webpackChunkName: "profile" */ '@/page/profile/Advanced');

const Result = () => import(/* webpackChunkName: "result" */ '@/page/result/Result');
const Success = () => import(/* webpackChunkName: "result" */ '@/page/result/Success');
const Error = () => import(/* webpackChunkName: "result" */ '@/page/result/Error');

export default {
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
      beforeEnter: checkLoginStateGuard(true),
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          meta: { title: 'Dashboard', icon: 'fa-tachometer' },
          component: Dashboard,
          children: [
            {
              path: 'analysis',
              name: 'Analysis',
              meta: { title: '分析页' },
              component: Analysis,
            },
            {
              path: 'workplace',
              name: 'Workplace',
              meta: { title: '工作台' },
              component: Workplace,
            },
          ],
        },
        {
          path: 'form',
          name: 'Form',
          meta: { title: '表单页', icon: 'fa-pencil-square-o', show: false },
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
            {
              path: 'step-form',
              name: 'StepForm',
              meta: { title: '分步表单', hideChildrenInMenu: true },
              component: StepForm,
              redirect: { name: 'StepFormInfo' },
              children: [
                {
                  path: 'info',
                  name: 'StepFormInfo',
                  meta: { title: '分步表单（填写转账信息）' },
                  component: Step1,
                },
                {
                  path: 'confirm',
                  name: 'StepFormConfirm',
                  meta: { title: '分步表单（确认转账信息）' },
                  component: Step2,
                },
                {
                  path: 'result',
                  name: 'StepFormResult',
                  meta: { title: '分步表单（完成）' },
                  component: Step3,
                },
              ],
            },
            {
              path: 'advanced-form',
              name: 'AdvancedForm',
              meta: { title: '高级表单' },
              component: AdvancedForm,
            },
          ],
        },
        {
          path: 'list',
          name: 'List',
          meta: { title: '列表页', icon: 'fa-table', show: false },
          component: List,
          children: [
            {
              path: 'table-list',
              name: 'TableList',
              meta: { title: '查询表格' },
              component: TableList,
            },
            {
              path: 'basic-list',
              name: 'BasicList',
              meta: { title: '标准列表' },
              component: BasicList,
            },
            {
              path: 'card-list',
              name: 'CardList',
              meta: { title: '卡片列表' },
              component: CardList,
            },
            {
              path: 'dynamic-list',
              name: 'DynamicList',
              meta: { title: '动态列表' },
              component: DynamicList,
            },
            {
              path: 'search',
              name: 'Search',
              meta: { title: '搜索列表', show: false },
              component: Search,
              children: [
                {
                  path: 'article-list',
                  name: 'ArticleList',
                  meta: { title: '搜索列表（文章）' },
                  component: ArticleList,
                },
                {
                  path: 'project-list',
                  name: 'ProjectList',
                  meta: { title: '搜索列表（项目）' },
                  component: ProjectList,
                },
                {
                  path: 'application-list',
                  name: 'ApplicationList',
                  meta: { title: '搜索列表（应用）' },
                  component: ApplicationList,
                },
              ],
            },
          ],
        },
        {
          path: 'profile',
          name: 'Profile',
          meta: { title: '详情页', icon: 'fa-list-alt', show: false },
          component: Profile,
          children: [
            {
              path: 'basic',
              name: 'BasicProfile',
              meta: { title: '基础详情页' },
              component: BasicProfile,
            },
            {
              path: 'advanced',
              name: 'AdvancedProfile',
              meta: { title: '高级详情页' },
              component: AdvancedProfile,
            },
          ],
        },
        {
          path: 'result',
          name: 'Result',
          meta: { title: '结果页', icon: 'fa-check-circle-o', show: false },
          component: Result,
          children: [
            {
              path: 'success',
              name: 'Success',
              meta: { title: '成功页' },
              component: Success,
            },
            {
              path: 'error',
              name: 'Error',
              meta: { title: '失败页' },
              component: Error,
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
