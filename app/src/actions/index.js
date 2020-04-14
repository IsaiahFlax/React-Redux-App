import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const DATA_SUCCESS = "DATA_SUCCESS";
export const DATA_ERROR = "DATA_ERROR";

export const fetchDataWithoutThunk = () => {
  return {
    type: FETCH_DATA
  };
};

//export const fetchData = () => dispatch => {
export const fetchData = () => {
  return dispatch => {
    // dispatch FETCH_DATA
    dispatch({
      type: FETCH_DATA
    });
    setTimeout(() => {
      axios
        .get(
          `https://opentdb.com/api.php?amount=10`
        )
        .then(res => {
          // dispatch transition to DATA_SUCCESS
          console.log("bk: actions/index.js: axios.then: res: ", res);
          let lastTotalCount = 0;
          const dailyDeaths = res.data.map(dd => {
            const currentDDCount = dd.Cases - lastTotalCount;
            lastTotalCount = dd.Cases;
            return {
              date: dd.Date,
              totalDeaths: dd.Cases,
              dailyDeaths: currentDDCount
            };
          });
          dispatch({ type: DATA_SUCCESS, payload: [...dailyDeaths].reverse() });
        })
        .catch(err => {
          // dispatch transition to DATA_ERROR
          console.log("bk: actions/index.js: axios.catch: err: ", err);
          dispatch({ type: DATA_ERROR, payload: err });
        });
    }, 1500);
  };
};
