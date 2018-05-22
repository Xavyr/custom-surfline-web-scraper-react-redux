const initialState = {
  syncData: false,
  beaches: [],
}

//The action passed into our reducer comes from the dispatch.
const firstReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SYNC_ACTION':
      if(state.syncData) {
        return {
          ...state,
          syncData: false
        }
      } else {
        return {
          ...state,
          syncData: action.payload
        }
      }
    case 'SEARCH_BEACH':
      let updatedState = { ...state };
      let updatedBeaches = updatedState.beaches.slice();
      updatedBeaches.push({location: action.location, report: action.payload });
      updatedState.beaches = updatedBeaches;
      return updatedState;
    default:
      return state;
  }
};




export default firstReducer;



