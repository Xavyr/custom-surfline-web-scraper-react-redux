import * as types from '../constants/actionTypes.js'

export const searchBeach = (values) => {
  return (dispatch) => {
    const beachData = fetch('http://localhost:3005/beaches/' + values.search)
      .then(function(response) {
        return response.json();
      })
      .then(function(jsonResponse) {
        return jsonResponse;
      });

    return beachData.then(
      (singleBeachData) => dispatch( { type: types.SEARCH_BEACH, payload: singleBeachData, location: values.search  }),
    ).catch(
      (err) => dispatch(err)
    );

  }
};




