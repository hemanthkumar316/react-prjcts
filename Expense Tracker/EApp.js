import React,{useState} from 'react'
import EForm from './EForm'
import ETracker from './ETracker'

const EApp = () => {
    const [track,setTrack]=useState([])
  return (
    <div>
   <EForm track={track} setTrack={setTrack}/>
   <ETracker track={track}/>
    </div>
  )
}

export default EApp