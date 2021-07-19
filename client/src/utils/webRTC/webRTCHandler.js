import { callState, setCallState, setLocalStream } from "../../store/actions/callActions"
import store from "../../store/store"

const defaultConstrains = {
  video:true,
  audio:true
}

export const getLocalStream = () => {
  navigator
  .mediaDevices
  .getUserMedia(defaultConstrains)
  .then(stream => {
    store.dispatch(setLocalStream(stream))
    store.dispatch(setCallState(callState.CALL_AVAILABLE))
  })
  .catch((error)=>{
    console.log('error occured when trying to get an access to get local stream')
    console.error(error)
  })

}