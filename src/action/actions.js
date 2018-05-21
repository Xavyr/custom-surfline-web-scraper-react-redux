import * as types from '../constants/actionTypes.js'

export const asyncAction = () => {
  return (dispatch) => {
    const beachData = fetch('http://localhost:3005/trestles')
      .then(function(response) {
        return response.json();
      })
      .then(function(jsonResponse) {
        return jsonResponse;
      });

    return beachData.then(
      (singleBeachData) => dispatch({ type: types.ASYNC_ACTION, payload: singleBeachData  }),
    ).catch(
      (err) => dispatch(err)
    );

  }
};

export const syncAction = () => {
  return {type: types.SYNC_ACTION, payload: true}
}



