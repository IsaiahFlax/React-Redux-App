import React from "react";
import { connect } from "react-redux";

import { fetchData } from "./actions";

/*{
          date: dd.Date,
          totalDeaths: dd.Cases,
          dailyDeaths: currentDDCount
        }*/

const Trivia = props => {
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
            <tbody>
              {props.questions.map(question => {
                return (
                  <tr>
                    <td>{question.question}</td>
                    <td>{question.answers}</td>
                   
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
    questions: state.questions,
    isLoading: state.isLoading,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { fetchData }
)(Trivia);
