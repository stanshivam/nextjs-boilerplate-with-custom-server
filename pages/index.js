import React from 'react';
import { connect } from 'react-redux';

import {
  loadData,
  startClock,
  tickClock
} from '../src/containers/test/test.actions';
import Page from '../src/containers/test/Test';
import Layout from '../src/layouts/Layout';
import initialize from '../src/utility/initialize';

class Index extends React.Component {
  static async getInitialProps(props) {
    initialize(props.ctx)
    const { store, isServer } = props.ctx;
    store.dispatch(tickClock(isServer));

    if (!store.getState().placeholderData) {
      store.dispatch(loadData());
    }

    return { isServer };
  }

  componentDidMount() {
    this.props.dispatch(startClock());
  }

  render() {
    return (
      <Layout title='Home'>
        <Page title='Index Page' linkTo='/other' NavigateTo='Other Page' />
      </Layout>
    );
  }
}

export default connect()(Index);
