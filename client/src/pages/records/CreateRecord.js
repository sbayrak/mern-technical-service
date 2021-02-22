import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const CreateRecord = () => {
  return (
    <Fragment>
      <div className='new'>
        <div className='new-wrapper'>
          <div className='groups'>
            <span>YENI KAYIT</span>
            <div className='input'>
              <div className='group'>
                <label htmlFor=''>Müşteri Adı</label>
                <input type='text' />
              </div>
              <div className='group'>
                <label htmlFor=''>Müşteri Telefon</label>
                <input type='text' />
              </div>
            </div>
            <div className='input'>
              <div className='group'>
                <label htmlFor=''>Cihaz Türü</label>
                <select name='' id=''>
                  <option value='kasa'>Kasa</option>
                  <option value='laptop'>Laptop</option>
                  <option value='tablet'>Tablet</option>
                  <option value='telefon'>Telefon</option>
                  <option value='yazici'>Yazıcı</option>
                  <option value='diger'>Diğer</option>
                </select>
              </div>

              <div className='group'>
                <label htmlFor=''>Marka</label>
                <input type='text' />
              </div>
            </div>
            <div className='input'>
              <div className='group'>
                <label htmlFor=''>Model/Seri No</label>
                <input type='text' />
              </div>
              <div className='group'>
                <label htmlFor=''>Fiziksel Hasar</label>
                <input type='text' />
              </div>
            </div>
            <div className='input'>
              <div className='group'>
                <label htmlFor=''>Aksesuarlar</label>
                <input type='text' />
              </div>
              <div className='group'>
                <label htmlFor=''>Teknisyen</label>
                <select name='' id=''>
                  <option value='user1'>user1</option>
                  <option value='user2'>user2</option>
                  <option value='user3'>Tablet</option>
                </select>
              </div>
            </div>
            <div className='input'>
              <div className='group'>
                <label htmlFor=''>Şikayet</label>
                <textarea name='' id='' cols='30' rows='5'></textarea>
              </div>

              <div className='group'>
                <label htmlFor=''>Notlar</label>
                <textarea name='' id='' cols='30' rows='5'></textarea>
              </div>
            </div>

            <button type='submit'>Kaydet</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CreateRecord;
