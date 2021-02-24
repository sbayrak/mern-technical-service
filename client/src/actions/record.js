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
