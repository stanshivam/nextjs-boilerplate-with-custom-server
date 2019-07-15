const nextRoutes = require('next-routes');
const routes = (module.exports = nextRoutes());
const APP_ROUTES = [
  {
    page: 'index',
    pattern: '/'
  },
  {
    page: 'about',
    pattern: '/about'
  },
  {
    page: 'signin',
    pattern: '/signin'
  },
  {
    page: 'signup',
    pattern: '/signup'
  },
  {
    page: 'post',
    pattern: '/p/:uuid'
  },
  {
    page: 'fetchExample',
    pattern: '/fetch-example'
  },
  {
    page: 'artists',
    pattern: '/artists'
  },
  {
    page: 'royaltyFreeMusic',
    pattern: '/royalty-free-music'
  }
];

APP_ROUTES.forEach(route => routes.add(route));

// module.exports = routes() // ----   ----      -----
//   .add('index', '/', 'index')
//   .add('about', '/about', 'about')
//   .add('signin', '/signin', '')
//   .add('signup', '/signup')
//   .add('post', '/p/:uuid')
//   .add('fetchExample', '/fetch-example');
