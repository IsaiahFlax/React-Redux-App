import React from "react";
import { connect } from "react-redux";

import { fetchData } from "./actions";

/*{
          date: dd.Date,
          totalDeaths: dd.Cases,
          dailyDeaths: currentDDCount
        }*/

const CovidGraph = props => {
  return (
    <div id="covidGraph">
      {props.isLoading ? (
        <div>data loading</div>
      ) : (
        <div>
          <button onClick={() => props.fetchData()}>fetch data</button>
          {props.error && (
            <div style={{ color: "red" }}>*error loading data*</div>
          )}
          <table>
            <thead>
              <th>date</th>
              <th>total deaths</th>
              <th>daily deaths</th>
            </thead>
            <tbody>
              {props.dailyDeaths.map(dd => {
                return (
                  <tr>
                    <td>{dd.date}</td>
                    <td>{dd.totalDeaths}</td>
                    <td>{dd.dailyDeaths}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    dailyDeaths: state.dailyDeaths,
    isLoading: state.isLoading,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { fetchData }
)(CovidGraph);
