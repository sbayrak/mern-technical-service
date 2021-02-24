import {
  RECORDS_LOADED,
  CREATE_RECORD,
  SINGLE_RECORD,
  RECORD_FAIL,
} from '../actions/types';

const initialState = {
  records: null,
  single_record: null,
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case RECORDS_LOADED:
      return {
        ...state,
        loading: false,
        records: payload,
      };

    default:
      return state;
  }
}
