import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { fetchCases } from '../store/actions';
import { Pane, Spinner, Text, Heading } from 'evergreen-ui';
import moment from 'moment';
import './Cases.css';

const Cases = props => {

  useEffect( () => {
    props.fetchCases();
  }, [])
  

  return (
    <div>
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&display=swap');
      </style>
    {props.cases && <div className="wrapper">
    <h1>COVID-19 Cases</h1>
    <h3>Today is {moment().format("MMM Do YYYY")}</h3>
    {props.isFetching && <Pane display="flex" alignItems="center" justifyContent="center" height={400}><h3>Fetching Data...</h3> <Spinner /></Pane>}
    <Pane
    elevation={3}
    float="left"
    width={300}
    height={220}
    margin={24}
    display="flex"
    justifyContent="center"
    alignItems="center"
    flexDirection="column"
    background="blueTint"
  >
    <Heading>{props.cases.Country}</Heading>
    <Text size={300}>New Confirmed Cases: {props.cases.NewConfirmed}</Text>
    <Text size={300}>Deaths: {props.cases.NewDeaths}</Text>
    <Text size={300}>Total Confirmed Cases: {props.cases.TotalConfirmed}</Text>
    <Text size={300}>Total Deaths: {props.cases.TotalDeaths}</Text>
    <Text size={300}>Total Recoveries: {props.cases.TotalRecovered}</Text>
  </Pane>

    </div>}
    </div>
  )
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
