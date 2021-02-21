import React from 'react';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-wrapper'>
        <div className='left'>
          <ul>
            <li>
              <a
                href='https://www.github.com/sbayrak'
                target='_blank'
                rel='noreferrer'
              >
                <i className='fab fa-github'></i>
              </a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/in/suat-bayrak/'
                target='_blank'
                rel='noreferrer'
              >
                <i className='fab fa-linkedin'></i>
              </a>
            </li>
          </ul>

          <span>&copy; Developed by Suat Bayrak. All rights reserved.</span>
        </div>
        <div className='right'>
          <span>İşyeri çözümleriniz, sorularınız için ulaşınız.</span>
          <a
            href='https://www.suatbayrak.com/#contact'
            target='_blank'
            rel='noreferrer'
          >
            <span>Kontakt Kurun</span>
            <i className='fas fa-link'></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
