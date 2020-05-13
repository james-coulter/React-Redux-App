import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { fetchCases } from '../store/actions';

const Cases = props => {

  useEffect( () => {
    props.fetchCases();
  }, [])
  
  
  return (
    <main>
      <h1>COVID-19 Cases</h1>
      {props.isFetching && <h3>Fetching Data...</h3>}
      {props.cases && <div>
      <h3>{props.cases.Country}</h3>
        </div>}
      {/* list of peoples */}
    </main>
  );
};

const mapStateToProps = state => {
  console.log(state)
  return {
    isFetching: state.reducer.isFetching,
    cases: state.reducer.cases,
    error: state.reducer.error
  }
}

export default connect(mapStateToProps, { fetchCases })(Cases);
