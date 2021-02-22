import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='welcomer'>
      <div className='welcomer-wrapper'>
        <div className='top'>
          <span>Hoşgeldiniz. </span>
          <p>İşlem yapmak için yukarıdaki menüyü kullanın.</p>
        </div>
        <div className='bottom'>
          <Link to='/create-record' rel='noreferrer'>
            Kayıt Aç
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
