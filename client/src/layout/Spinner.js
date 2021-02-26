import React from 'react';
import logo from '../img/favicon-32x32.png';

const Spinner = () => {
  return (
    <div className='wrapperLoading'>
      <div className='ring'>
        <img src={logo} alt='' />
        <span className='loadingSpan'></span>
      </div>
    </div>
  );
};

export default Spinner;
