import React from 'react';
import { connect } from 'react-redux';
import Layout from '../src/layouts/Layout';
import initialize from '../src/utility/initialize';

class RoyaltyFreeMusic extends React.Component {
    static async getInitialProps(props) {
        initialize(props.ctx);
        return {};
    }

    render() {
        return (
            <Layout title='Royalty Free Music'>
                <p>Royalty free music</p>
            </Layout>
        );
    }
}

export default connect()(RoyaltyFreeMusic);
