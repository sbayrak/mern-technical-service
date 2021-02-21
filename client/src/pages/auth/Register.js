import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const Register = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/'></Redirect>;
  }
  console.log(isAuthenticated);

  return (
    <div className='register'>
      <div className='register-wrapper'>
        <div className='top'>
          <i className='fas fa-user-plus'></i>
          <span>Register</span>
        </div>
        <div className='bottom'>
          <ul>
            <li>Kayıt bilgileriniz için öncelikle ücret onayı alınmalıdır</li>
            <li>
              Ücret onaylandıktan sonra kullanıcı adı ve şifreniz size iletilir
            </li>
            <li>
              Kayıt ve ya giriş hakkında sorularınız varsa, bizle iletişime
              geçiniz
            </li>
            <li>
              <a
                href='https://www.suatbayrak.com/#contact'
                target='_blank'
                rel='noreferrer'
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

Register.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Register);
