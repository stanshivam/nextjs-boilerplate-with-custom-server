import axios from 'axios';
import { connect } from 'react-redux';
import { API_URL } from '../config';
import Layout from '../src/layouts/Layout';
import initialize from '../src/utility/initialize';

const Whoami = ({ user }) => (
  <Layout title='Who Am I'>
    {(user && (
      <h3 className='title is-3'>
        You are logged in as{' '}
        <strong className='is-size-2 has-text-primary'>
          {JSON.stringify(user)}
        </strong>
        .
      </h3>
    )) || (
        <h3 className='title is-3 has-text-danger	'>You are not authenticated.</h3>
      )}
  </Layout>
);

Whoami.getInitialProps = async props => {
  initialize(props.ctx);
  const { store } = props.ctx;
  const token = store.getState().auth.token;
  if (token) {
    const response = await axios.get(`${API_URL}/user/2`, {
      headers: {
        authorization: token
      }
    });
    const user = response.data.data;
    return {
      user
    };
  }
};

export default connect(state => state)(Whoami);
