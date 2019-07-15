import React from 'react';
import { connect } from 'react-redux';
import Layout from '../src/layouts/Layout';
import initialize from '../src/utility/initialize';

class Artists extends React.Component {
  static async getInitialProps(props) {
    initialize(props.ctx);
    return {};
  }

  render() {
    return (
      <Layout title='Our Artists'>
        <p>Our Artists</p>
      </Layout>
    );
  }
}

export default connect()(Artists);
