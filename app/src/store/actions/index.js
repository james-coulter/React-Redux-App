import axios from 'axios';
export const FETCH_CASES_START = 'FETCH_CASES_START';
export const FETCH_CASES_SUCCESS = "FETCH_CASES_SUCCESS";
export const FETCH_CASES_FAILURE = "FETCH_CASES_FAILURE";


export const fetchCases = () => {
    return dispatch => {
        dispatch({ type: FETCH_CASES_START })
        axios.get('https://api.covid19api.com/summary')

            .then(res => {
                console.log(res)
                dispatch({ type: FETCH_CASES_SUCCESS, payload: res.data.Countries[176]})
            })
            .catch( err => {
                console.log(err)
            })
    }
}