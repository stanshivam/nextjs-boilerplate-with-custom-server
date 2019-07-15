import Head from 'next/head';
import { connect } from 'react-redux';
import NavBar from '../components/NavBar';
import './temp.css';
import { deauthenticate } from '../containers/signin/signin.actions';

const Layout = ({ children, title, isAuthenticated, deauthenticate }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link
        rel='stylesheet'
        href='https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.2/css/bulma.min.css'
      />
    </Head>
    <div className='tabs is-centered'>
      <div className='logo'>
        <img src='/static/nextjs.png' />
      </div>
      <div className='nav-bar'>
        <NavBar
          isAuthenticated={isAuthenticated}
          deauthenticate={deauthenticate}
        />
      </div>
    </div>

    <div className='has-text-centered'>{children}</div>
  </div>
);

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.token
});

const mapDispatchToProps = dispatch => ({
  deauthenticate: () => {
    dispatch(deauthenticate())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
