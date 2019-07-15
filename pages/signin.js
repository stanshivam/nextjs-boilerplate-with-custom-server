import React from 'react';
import { connect } from 'react-redux';
import SigninComponent from '../src/containers/signin/Signin';
import Layout from '../src/layouts/Layout';
import initialize from '../src/utility/initialize';

class Signin extends React.Component {
  static async getInitialProps(props) {
    initialize(props.ctx);
  }

  render() {
    return (
      <Layout title='Home'>
        <SigninComponent
          title='Signin Page'
          linkTo='/other'
          NavigateTo='Other Page'
        />
      </Layout>
    );
  }
}

export default connect()(Signin);
