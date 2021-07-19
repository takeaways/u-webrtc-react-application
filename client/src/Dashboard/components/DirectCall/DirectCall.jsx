import React from 'react'
import { useSelector } from "react-redux"
import CallingDialog from '../CallingDialog/CallingDialog'
import CallRejectedDialog from '../CallRejectedDialog/CallRejectedDialog'
import IncomingCallDialog from '../IncomingCallDialog/IncomingCallDialog'

import LocalVideoView from '../LocalVideoView/LocalVideoView'
import RemoteVideoView from '../RemoteVideoView/RemoteVideoView'

const DirectCall = () => {

  const {localStream, remoteStream} = useSelector(state => state.call)

  return (
    <React.Fragment>
      <LocalVideoView localStream={localStream}/>
      {remoteStream && <RemoteVideoView remoteStream={remoteStream}/>}
      {/* <CallRejectedDialog/> */}
      {/* <IncomingCallDialog/> */}
      {/* <CallingDialog/> */}

    </React.Fragment>
  )
}


export default DirectCall
