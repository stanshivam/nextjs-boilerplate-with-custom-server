import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Layout from '../src/layouts/Layout';
import initialize from '../src/utility/initialize';

const Index = props => (
  <Layout title={'Fetch Example'}>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map(show => (
        <li key={show.id}>
          <Link as={`/p/${show.id}`} href={`/post?uuid=${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

Index.getInitialProps = async function (props) {
  initialize(props.ctx);
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();
  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map(entry => entry.show)
  };
};

export default Index;
