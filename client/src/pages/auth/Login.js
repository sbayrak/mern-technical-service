import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import PropTypes from 'prop-types';

const Login = ({ login }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className='login'>
      <div className='login-wrapper'>
        <div className='top'>
          <i className='fas fa-sign-in-alt'></i>
          <span>Login</span>
        </div>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className='group'>
            <input
              type='text'
              placeholder='Username'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='group'>
            <input
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type='submit'>Login</button>
        </form>
        <div className='bottom'>
          <p>
            Having a problem with login ?<a href='#'>Contact</a>
          </p>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

export default connect(null, { login })(Login);
