import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { minhaAction } from '../redux/actions/index';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };

    this.handleInputGeneric = this.handleInputGeneric.bind(this);
  }

  handleInputGeneric({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleSubmit = () => {
    const { history, dispatch } = this.props;
    console.log('dispatch', this.props);
    dispatch(minhaAction(this.state));
    history.push('/registered');
  };

  render() {
    const { email, password } = this.state;
    return (
      <form>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            name="email"
            value={ email }
            onChange={ this.handleInputGeneric }
          />
        </label>

        <label htmlFor="password">
          Senha:
          <input
            type="password"
            name="password"
            value={ password }
            onChange={ this.handleInputGeneric }
          />
        </label>

        <button
          type="button"
          onClick={ this.handleSubmit }
        >
          Login

        </button>
      </form>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape(PropTypes.string),
}.isRequired;

export default connect()(Login);
