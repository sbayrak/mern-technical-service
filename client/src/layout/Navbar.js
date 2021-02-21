import React, { useState, useEffect } from 'react';
import logo from '../img/android-chrome-192x192.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';
import PropTypes from 'prop-types';

const Navbar = ({ logout, isAuthenticated, loading }) => {
  const [bgColor, setBgColor] = useState('rgba(0,0,0,0.1)');
  const [txtColor, setTxtColor] = useState('#000');

  useEffect(() => {
    let listener = null;
    // eslint-disable-next-line no-unused-vars
    listener = document.addEventListener('scroll', (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 100) {
        setBgColor('rgba(0,0,0,.9)');
        setTxtColor('#fff');
      } else if (scrolled < 100) {
        setBgColor('rgba(0,0,0,.1)');
        setTxtColor('#000');
      }
    });
  });

  const userLinks = (
    <ul>
      <li>
        <Link to='/create-record'>Kayıt Aç</Link>
      </li>
      <li>
        <Link onClick={logout}>Çıkış</Link>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to='/login'>Giriş</Link>
      </li>
      <li>
        <Link to='/register'>Kayıt Ol</Link>
      </li>
    </ul>
  );

  return (
    <nav style={{ transition: 'ease-in-out 0.5s', backgroundColor: bgColor }}>
      <div className='nav-wrapper'>
        <div className='left'>
          <img src={logo} alt='teknik_servis_logo' />
          <Link
            to='/'
            style={{ transition: 'ease-in-out 0.5s', color: txtColor }}
          >
            Teknik Servis Programı
          </Link>
        </div>
        <div className='right'>
          <ul>
            <li>
              <Link
                to='/login'
                style={{ transition: 'ease-in-out 0.5s', color: txtColor }}
              >
                Giriş
              </Link>
            </li>
            <li>
              <Link
                to='/register'
                style={{ transition: 'ease-in-out 0.5s', color: txtColor }}
              >
                Kayıt Ol
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func,
  isAuthenticated: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
});

export default connect(mapStateToProps, { logout })(Navbar);
