import React, { useEffect } from 'react'
import Left from '../components/Left'
import '../App.css'
function Header({deviceId,setDeviceId, setDate}) {
  // useEffect(()=>{
  //   console.log(`DeviceId ${deviceId}`)
  // })
  return (
    <div className="left">
    <div className="LeftInner">
      <h3>UNS</h3>
      <div className="x1">
        <Left deviceId={deviceId} setDeviceId={setDeviceId} setDate={setDate}/>
      </div>
    </div>
  </div>
  )
}

export default Header