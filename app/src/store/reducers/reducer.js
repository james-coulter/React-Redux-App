import { FETCH_CASES_START, FETCH_CASES_SUCCESS } from '../actions';

const initialState = {
    isFetching: false,
    cases: [],
    error: ''
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CASES_START:
        return {
            ...state,
            isFetching: true
        }
    case FETCH_CASES_SUCCESS:
        return {
            ...state,
            isFetching: false,
            cases: action.payload
        }
    default:
      return state;
  }
};