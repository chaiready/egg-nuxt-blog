import Vue from 'vue'
import Router from 'vue-router'

const BasicLayout = () => import('@/layouts/Basic')
const UserLayout = () => import('@/layouts/User')
const NotFound = () => import('@/layouts/NotFound')

const Dashboard = () => import('@/views/Dashboard')
const Carousel = () => import('@/views/Carousel')
const Login = () => import('@/views/Login')
const Security = () => import('@/views/Security')
const ArticleList = () => import('@/views/Article/List.vue')
const ArticleEditor = () => import('@/views/Article/Editor.vue')
const Category = () => import('@/views/Category/List')
const Comment = () => import('@/views/Comment/List')
const Guestbook = () => import('@/views/Guestbook/List')
const Tag = () => import('@/views/Tag')
// const Aboutus = () => import('@/views/Aboutus')
const Platform = () => import('@/views/Platform')
const Author = () => import('@/views/Author')

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/auth',
      component: UserLayout,
      children: [
        {
          name: 'login',
          path: 'login',
          component: Login,
        },
      ],
    },
    {
      path: '/',
      component: BasicLayout,
      children: [
        {
          path: '',
          redirect: 'dashboard',
        },
        // {
        //   path: '/index.html',
        //   redirect: 'dashboard',
        // },
        {
          name: 'dashboard',
          path: 'dashboard',
          component: Dashboard,
          meta: {
            activedMenuItem: 'dashboard',
          },
        },

        {
          name: 'platform',
          path: 'platform',
          component: Platform,
          meta: {
            activedMenuItem: 'platform',
          },
        },
        {
          name: 'author',
          path: 'author',
          component: Author,
          meta: {
            activedMenuItem: 'author',
          },
        },
        {
          name: 'security',
          path: 'settings/security',
          component: Security,
          meta: {
            title: '账户设置',
            activedMenuItem: 'settings/security',
          },
        },
        {
          name: 'articles',
          path: 'articles',
          component: ArticleList,
          meta: {
            title: '文章列表',
            activedMenuItem: 'articles',
          },
        },
        {
          name: 'ArticleEditor',
          path: 'articles/:id/edit',
          component: ArticleEditor,
          meta: {
            title: '编辑文章',
          },
        },
        {
          name: 'ArticleCreator',
          path: 'articles/new',
          component: ArticleEditor,
          meta: {
            title: '新增文章',
          },
        },
        {
          name: 'categories',
          path: 'categories',
          component: Category,
          meta: {
            title: '文章分类列表',
            activedMenuItem: 'categories',
          },
        },
        {
          name: 'article-comments',
          path: 'articles/:articleID/comments',
          component: Comment,
          meta: {
            title: '文章评论',
          },
        },
        {
          name: 'comments',
          path: 'comments',
          component: Comment,
          meta: {
            title: '全部评论',
          },
        },
        {
          name: 'guestbooks',
          path: 'guestbooks',
          component: Guestbook,
          meta: {
            title: '留言墙',
          },
        },
        {
          name: 'tags',
          path: 'tags',
          component: Tag,
          meta: {
            title: '标签列表',
          },
        },
        {
          name: 'carousels',
          path: 'carousels',
          component: Carousel,
          meta: {
            title: '轮播图',
          },
        },
      ],
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound,
    },
  ],
})

router.beforeEach((to, from, next) => {
  if (to.path === '/auth/login') {
    return next()
  }
  const accessToken = localStorage.getItem('accessToken')

  return accessToken ? next() : next('/auth/login')
})

export default router
