import * as callActions from "../actions/callActions"

const initialState = {
  localStream:null,
  callState:callActions.callState.CALL_UNAVAILABLE
}

const reducer = (state = initialState, action) => {
  switch (action.type){
    case callActions.CALL_SET_LOCAL_STREAM:
      return {
        ...state,
        localStream:action.localStream
      }
    
    case callActions.CALL_SET_CALL_STATE:
      return {
        ...state,
        callState:action.callState
      }
   

    default:
      return state;
  }
}

export default reducer;