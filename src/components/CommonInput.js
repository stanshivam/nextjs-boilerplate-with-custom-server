import React from 'react';
import PropTypes from 'prop-types';

class CommonInput extends React.Component {
  checkValid = value => {
    let errorMessage = '';
    let isValid = this.props.pattern
      ? value.match(new RegExp(this.props.pattern, 'gi'))
      : true;
    if (!isValid) {
      errorMessage = this.props.errorMessage || `Invalid ${this.props.label}`;
    }
    if (this.props.required && !value) {
      isValid = false;
      errorMessage = `${this.props.label} is required`;
    }
    return {
      isValid,
      errorMessage
    };
  };

  handleChange = e => {
    const value = e.target.value;
    const { isValid } = this.checkValid(value);
    this.props.onChange({
      target: {
        name: this.props.name,
        value,
        isInvalid: !isValid
      }
    });
  };

  componentDidMount() {
    this.handleChange({
      target: {
        name: this.props.name,
        value: this.props.value
      }
    });
  }

  render() {
    const { type, placeholder, required, value, name, label } = this.props;
    const { isValid, errorMessage } = this.checkValid(this.props.value);
    const showError = this.props.isSubmitted && !isValid;
    return (
      <div>
        <p style={{ marginTop: '10px' }}>{label}</p>
        <input
          className='input'
          type={type}
          placeholder={placeholder}
          //   required={required}
          value={value}
          onChange={this.handleChange}
          name={name}
        />
        {showError && <p style={{ color: 'red' }}>{errorMessage}</p>}
      </div>
    );
  }
}

CommonInput.propTypes = {
  required: PropTypes.bool,
  isSubmitted: PropTypes.bool,
  onChange: PropTypes.func,
  label: PropTypes.string,
  errorMessage: PropTypes.string,
  pattern: PropTypes.any,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.any
};

export default CommonInput;
