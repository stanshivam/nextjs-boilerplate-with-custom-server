import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestLogin } from './signin.actions';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'eve.holt@reqres.i',
      password: 'cityslicka'
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.actions.requestLogin(this.state);
  }

  render() {
    const { failureMessage, isLoading } = this.props;
    return (
      <>
        <h3 className='title is-3'>Sign In</h3>
        <p style={{ color: 'red' }}>{failureMessage}</p>
        <form
          onSubmit={this.handleSubmit.bind(this)}
          className='container'
          style={{ width: '540px' }}
        >
          <div className='field'>
            <p className='control has-icons-left has-icons-right'>
              <input
                className='input'
                type='email'
                placeholder='Email'
                required
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })}
              />
              <span className='icon is-small is-left'>
                <i className='fas fa-envelope' />
              </span>
              <span className='icon is-small is-right'>
                <i className='fas fa-check' />
              </span>
            </p>
          </div>
          <div className='field'>
            <p className='control has-icons-left'>
              <input
                className='input'
                type='password'
                placeholder='Password'
                required
                value={this.state.password}
                onChange={e => this.setState({ password: e.target.value })}
              />
              <span className='icon is-small is-left'>
                <i className='fas fa-lock' />
              </span>
            </p>
          </div>
          <div className='field'>
            <p className='control has-text-centered'>
              <button type='submit' className='button is-success'>
                {isLoading ? 'Wait...' : 'Sign In'}
              </button>
            </p>
          </div>
        </form>
      </>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.auth.isLoading,
  failureMessage: state.auth.failureMessage
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      requestLogin
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signin);
