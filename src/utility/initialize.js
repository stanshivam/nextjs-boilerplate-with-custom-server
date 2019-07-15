import Router from 'next/router';
import { getCookie } from './cookie';
import { authenticate } from '../containers/signin/signin.actions';

// checks if the page is being loaded on the server, and if so, get auth token from the cookie:
export default function(ctx) {
  if (ctx.isServer) {
    if (ctx.req.headers.cookie) {
      const token = getCookie('token', ctx.req);
      ctx.store.dispatch(authenticate(token));
    }
  } else {
    console.log(ctx);
    const token = ctx.store.getState().auth.token;
    console.log('is browser');
    if (token && (ctx.pathname === '/signin' || ctx.pathname === '/signup')) {
      setTimeout(function() {
        Router.push('/');
      }, 0);
    }
  }
}
