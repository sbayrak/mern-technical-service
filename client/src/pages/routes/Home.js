import React from 'react';

const Home = () => {
  return (
    <div className='welcomer'>
      <div className='welcomer-wrapper'>
        <div className='top'>
          <span>Hoşgeldiniz. </span>
          <p>İşlem yapmak için soldaki menüyü kullanın.</p>
        </div>
        <div className='bottom'>
          <a href='/create-record' rel='noreferrer'>
            Kayıt Aç
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
