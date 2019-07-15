import Link from 'next/link';
import { connect } from 'react-redux';

const NavBar = ({ isAuthenticated, deauthenticate }) => (
  <>
    <ul>
      <Link href='/'>
        <a>Home</a>
      </Link>
      {!isAuthenticated && (
        <li>
          <Link as={`/p/PjgKGH_khGJk`} href={`/post?uuid=PjgKGH_khGJk`}>
            <a>Route Masking</a>
          </Link>
        </li>
      )}
      {!isAuthenticated && (
        <li>
          <Link as={`/fetch-example`} href={`/fetchExample`}>
            <a>Fetch Eg.</a>
          </Link>
        </li>
      )}
      <Link href='/artists'>
        <a>Artists</a>
      </Link>
      {!isAuthenticated && (
        <Link href='/signin'>
          <a>Sign In</a>
        </Link>
      )}
      {!isAuthenticated && (
        <Link href='/signup'>
          <a>Sign Up</a>
        </Link>
      )}
      {isAuthenticated && (
        <li onClick={deauthenticate}>
          <a>Sign Out</a>
        </li>
      )}

      <Link href='/whoami'>
        <a>Who Am I</a>
      </Link>
    </ul>
  </>
);

const mapStateToProps = state => state;

export default connect(mapStateToProps)(NavBar);
