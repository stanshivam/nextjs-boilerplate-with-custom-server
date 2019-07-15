import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestLogin } from './signup.actions';
import CommonInput from '../../components/CommonInput';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        fullName: '',
        email: '',
        password: '',
        phone: '',
        address: '',
        city: ''
      },
      isSubmitted: false,
      validInputs: {}
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      isSubmitted: true
    });
  }

  handleInputChange = ({ target: { name, value, isInvalid } }) => {
    this.setState(state => {
      const validInputs = state.validInputs;
      if (isInvalid) {
        delete validInputs[name];
      } else {
        validInputs[name] = true;
      }
      return {
        form: {
          ...state.form,
          [name]: value
        },
        isValidForm: state.isValidForm && !isInvalid,
        validInputs
      };
    });
  };

  render() {
    const { failureMessage, isLoading } = this.props;
    const { form, isSubmitted } = this.state;
    return (
      <>
        <h3 className='title is-3'>Sign Up</h3>
        <p style={{ color: 'red' }}>{failureMessage}</p>
        <form
          onSubmit={this.handleSubmit.bind(this)}
          className='container'
          style={{ width: '540px' }}
        >
          <div className='field'>
            <div className='control has-icons-left has-icons-right'>
              {/* <input
                className='input'
                type='email'
                placeholder='Email'
                required
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })}
              /> */}
              <CommonInput
                type='text'
                name={'fullName'}
                label={'Full Name'}
                value={form.fullName}
                isSubmitted={isSubmitted}
                onChange={this.handleInputChange}
                style={{ marginBottom: '20px' }}
                pattern={/^[a-zA-Z ]$/}
                required
              />
              <CommonInput
                type='email'
                name={'email'}
                label={'Email'}
                value={form.email}
                isSubmitted={isSubmitted}
                onChange={this.handleInputChange}
                style={{ marginBottom: '20px' }}
                required
              />
              <CommonInput
                type='password'
                name={'password'}
                label={'Password'}
                value={form.password}
                isSubmitted={isSubmitted}
                onChange={this.handleInputChange}
                style={{ marginBottom: '20px' }}
                required
              />
              <CommonInput
                type='text'
                name={'phone'}
                label={'Phone'}
                value={form.phone}
                isSubmitted={isSubmitted}
                onChange={this.handleInputChange}
                style={{ marginBottom: '20px' }}
                required
              />
              <CommonInput
                type='text'
                name={'address'}
                label={'Address'}
                value={form.address}
                isSubmitted={isSubmitted}
                onChange={this.handleInputChange}
                style={{ marginBottom: '20px' }}
                required
              />
              <CommonInput
                type='text'
                name={'city'}
                label={'City'}
                value={form.city}
                isSubmitted={isSubmitted}
                onChange={this.handleInputChange}
                style={{ marginBottom: '20px' }}
                required
              />
              <span className='icon is-small is-left'>
                <i className='fas fa-envelope' />
              </span>
              <span className='icon is-small is-right'>
                <i className='fas fa-check' />
              </span>
            </div>
          </div>
          {/* <div className='field'>
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
          </div> */}
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
)(Signup);
