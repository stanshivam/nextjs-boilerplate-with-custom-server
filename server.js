const express = require('express');
const next = require('next');
const cookieParser = require('cookie-parser');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
// const handle = app.getRequestHandler();
const routes = require('./routes');
const handler = routes.getRequestHandler(app, ({ req, res, route, query }) => {
  ['/signin', '/signup'].includes(req.url) &&
    req.cookies.token &&
    res.redirect('/');
  app.render(req, res, route.page, query);
});

app
  .prepare()
  .then(() => {
    const server = express();

    server.use(cookieParser());

    // server.get('/signin', (req, res) => {
    //   if (req.cookies.token) {
    //     res.redirect('/');
    //   } else {
    //     return app.render(req, res, '/signin', req.query);
    //   }
    // });

    // server.get('/signup', (req, res) => {
    //     if (req.cookies.token) {
    //         res.redirect('/');
    //     } else {
    //         return app.render(req, res, '/signup', req.query);
    //     }
    // });

    // server.get('/p/:uuid', (req, res) => {
    //     const actualPage = '/post';
    //     const queryParams = { uuid: req.params.uuid };
    //     app.render(req, res, actualPage, queryParams);
    // });

    // server.get('/fetch-example', (req, res) => {
    //     const actualPage = '/fetchExample';
    //     app.render(req, res, actualPage);
    // });

    // server.get('*', (req, res, next) => {
    //   if (req.cookies.token) {
    //     res.redirect('/');
    //   }
    //   next();
    // });

    server.get('*', (req, res) => {
      return handler(req, res, req.query);
    });

    server.listen(port, err => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
