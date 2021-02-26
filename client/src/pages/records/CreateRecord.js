import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createRecord } from '../../actions/record';
import { getAllRecords } from '../../actions/record';
import { setAlert } from '../../actions/alert';
import { useHistory } from 'react-router-dom';

const CreateRecord = ({ createRecord, record }) => {
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [type, setType] = useState('');
  const [brand, setBrand] = useState('');
  const [modelno, setModelno] = useState('');
  const [physicalDamage, setPhysicalDamage] = useState('');
  const [accessories, setAccessories] = useState('');
  const [technician, setTechnician] = useState('');
  const [complaint, setComplaint] = useState('');
  const [not, setNot] = useState('');

  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    createRecord({
      customerName: customerName,
      customerPhone: customerPhone,
      type: type,
      brand: brand,
      modelno: modelno,
      physicalDamage: physicalDamage,
      accessories: accessories,
      technician: technician,
      complaint: complaint,
      not: not,
    });

    setAlert('Kayıt başarıyla oluşturuldu', 'success');
  };
  console.log(customerPhone);

  return (
    <Fragment>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className='new'>
          <div className='new-wrapper'>
            <div className='groups'>
              <span>YENI KAYIT</span>

              <div className='input'>
                <div className='group'>
                  <label htmlFor=''>Müşteri Adı</label>
                  <input
                    type='text'
                    name='customerName'
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                  />
                </div>
                <div className='group'>
                  <label htmlFor=''>Müşteri Telefon</label>
                  <input
                    type='text'
                    name='customerPhone'
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                  />
                </div>
              </div>
              <div className='input'>
                <div className='group'>
                  <label htmlFor=''>Cihaz Türü</label>
                  <select
                    name='type'
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    id=''
                  >
                    <option value=''></option>
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
                  <input
                    type='text'
                    name='brand'
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                  />
                </div>
              </div>
              <div className='input'>
                <div className='group'>
                  <label htmlFor=''>Model/Seri No</label>
                  <input
                    type='text'
                    name='modelno'
                    value={modelno}
                    onChange={(e) => setModelno(e.target.value)}
                  />
                </div>
                <div className='group'>
                  <label htmlFor=''>Fiziksel Hasar</label>
                  <input
                    type='text'
                    name='physicalDamage'
                    value={physicalDamage}
                    onChange={(e) => setPhysicalDamage(e.target.value)}
                  />
                </div>
              </div>
              <div className='input'>
                <div className='group'>
                  <label htmlFor=''>Aksesuarlar</label>
                  <input
                    type='text'
                    name='accessories'
                    value={accessories}
                    onChange={(e) => setAccessories(e.target.value)}
                  />
                </div>
                <div className='group'>
                  <label htmlFor=''>Teknisyen</label>
                  <select
                    name='technician'
                    value={technician}
                    onChange={(e) => setTechnician(e.target.value)}
                    id=''
                  >
                    <option></option>
                    <option value='user1'>user1</option>
                    <option value='user2'>user2</option>
                    <option value='user3'>Tablet</option>
                  </select>
                </div>
              </div>
              <div className='input'>
                <div className='group'>
                  <label htmlFor=''>Şikayet</label>
                  <textarea
                    name='complaint'
                    value={complaint}
                    onChange={(e) => setComplaint(e.target.value)}
                    id=''
                    cols='30'
                    rows='5'
                  ></textarea>
                </div>

                <div className='group'>
                  <label htmlFor=''>Notlar</label>
                  <textarea
                    name='not'
                    value={not}
                    onChange={(e) => setNot(e.target.value)}
                    id=''
                    cols='30'
                    rows='5'
                  ></textarea>
                </div>
              </div>

              <button type='submit'>Kaydet</button>
            </div>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

CreateRecord.propTypes = {
  createRecord: PropTypes.func,
  record: PropTypes.object,
};

const mapStateToProps = (state) => ({
  record: state.record,
});

export default connect(mapStateToProps, { createRecord })(CreateRecord);
