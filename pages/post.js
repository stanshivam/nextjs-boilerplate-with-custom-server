import { withRouter } from 'next/router';
import Layout from '../src/layouts/Layout';
import initialize from '../src/utility/initialize';

function Post(props) {
  return (
    <Layout title={'single post page'}>
      <h1>
        <b>UID from URL:</b> {props.router.query.uuid}
      </h1>
      <p>This is the blog post content.</p>
      <p
        style={{
          color: '#673baf',
          fontSize: 'x-large'
        }}
      >
        Custom Route Masking + Next.js custom server API
      </p>
    </Layout>
  );
}

Post.getInitialProps = async function (props) {
  initialize(props.ctx);
};

export default withRouter(Post);
