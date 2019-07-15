import React from 'react';
import { connect } from 'react-redux';
import Layout from '../src/layouts/Layout';
import initialize from '../src/utility/initialize';
import Signup from '../src/containers/signup/Signup';

class SignupPage extends React.Component {
  static async getInitialProps(props) {
    initialize(props.ctx);
  }

  render() {
    return (
      <Layout title='Sign Up'>
        <Signup title='Signup Page' />
      </Layout>
    );
  }
}

export default connect()(SignupPage);
