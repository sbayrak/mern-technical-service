import {
  RECORDS_LOADED,
  CREATE_RECORD,
  SINGLE_RECORD,
  RECORD_FAIL,
} from './types';
import axios from 'axios';
import { setAlert } from './alert';

// GET ALL RECORDS
export const getAllRecords = () => async (dispatch) => {
  try {
    let res = await axios.get('/api/records');

    dispatch({
      type: RECORDS_LOADED,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({ type: RECORD_FAIL });
  }
};

// CREATE RECORD
export const createRecord = ({
  customername,
  customerphone,
  type,
  brand,
  modelno,
  physicalDamage,
  accessories,
  technician,
  complaint,
  not,
}) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({
    customername,
    customerphone,
    type,
    brand,
    modelno,
    physicalDamage,
    accessories,
    technician,
    complaint,
    not,
  });
  try {
    const res = await axios.post('/api/records', body, config);

    dispatch({
      type: CREATE_RECORD,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({ type: RECORD_FAIL });
  }
};
