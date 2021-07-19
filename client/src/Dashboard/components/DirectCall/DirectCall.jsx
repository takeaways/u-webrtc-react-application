import React from 'react'
import { useSelector } from "react-redux"

import LocalVideoView from '../LocalVideoView/LocalVideoView'
import RemoteVideoView from '../RemoteVideoView/RemoteVideoView'

const DirectCall = () => {

  const {localStream, remoteStream} = useSelector(state => state.call)

  return (
    <React.Fragment>
      <LocalVideoView localStream={localStream}/>
      {remoteStream && <RemoteVideoView remoteStream={remoteStream}/>}
    </React.Fragment>
  )
}


export default DirectCall
