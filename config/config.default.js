const nuxtConfig = require('./nuxt.config')
const { resolve } = require('path')
module.exports = appInfo => {

  nuxtConfig.rootDir = appInfo.baseDir
  nuxtConfig.srcDir = resolve(appInfo.baseDir, 'web')
  return {
    keys: appInfo.name,
    static: {
      prefix: '/',
    },
    upload: {
      match: '/api/upload',
      dir: 'app/public/uploads/',
    },
    adminRequired: {
      match(ctx) {
        if (
          ctx.path.startsWith('/api/admin') &&
          ctx.path !== '/api/admin/auth/login'
        ) {
          return true
        } else {
          return false
        }
      },
    },
    nuxtRender: { nuxtConfig, ignore: ['/api', '/admin'] },
    webArticleFilter: {
      match: '/api/articles',
    },
    middleware: [
      'errorHandler',
      'siteTraffic',
      'adminRequired',
      'upload',
      'webArticleFilter',
      'articleFilter',
      'nuxtRender',
    ],
    cors: {
      origin: '*',
    },
    security: {
      csrf: {
        enable: false,
      },
    },
    adminSecret: {
      secretKey: 'konglingwen',
      expiresIn: '100h',
    },
    mongodb: {
      database: 'my-blog',
      host: '127.0.0.1',
      port: '27017',
      username: '',
      password: '',
    },
  }
}
