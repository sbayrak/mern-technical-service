import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllRecords } from '../../actions/record';
import { Link } from 'react-router-dom';

const Records = ({ getAllRecords, record: { loading, records } }) => {
  useEffect(() => {
    getAllRecords();
  }, []);

  return (
    <div className='records'>
      <div className='records-wrapper'>
        <table className='customTable'>
          <thead>
            <tr>
              <th>Ürün Kodu</th>
              <th>Müşteri Adı</th>
              <th>Modeli</th>
              <th>Durumu</th>
              <th>Ürüne Git</th>
            </tr>
          </thead>
          <tbody>
            {loading
              ? 'loading..'
              : records.map((record) => (
                  <tr>
                    <td>{record._id}</td>
                    <td>{record.customername}</td>
                    <td>{record.brand}</td>
                    <td>{record.status}</td>
                    <td>
                      <Link to={`/records/record/${record._id}`}>
                        <i className='fas fa-external-link-alt'></i>
                      </Link>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

Records.propTypes = {
  getAllRecords: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  record: state.record,
});

export default connect(mapStateToProps, { getAllRecords })(Records);
