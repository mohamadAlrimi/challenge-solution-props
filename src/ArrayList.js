
import { useState } from "react"
export default function ArrayList(){
    const [ deviceNameInputValue ,setDeviceNameInputValue]=useState("")
    const[devices ,setDevices]=useState([{ id : 1 ,name :"iphone "},{ id : 2 ,name :"mac "},{ id : 3 ,name :"samsung "},{ id : 4 ,name :"windows"}])
  
    const devicesList =devices.map((device)=>{
      return(<li key={device.id}>{device.name} <button>Delete</button></li>)
    })
    function handleAddFunction(){
        // const newDevices = [...devices]
        // newDevices.push(deviceNameInputValue)
        // setElementName(newArray)
        
        setDevices([...devices , { name :deviceNameInputValue}])
    }
    return (<>
    <div>{devicesList}</div>
    <input value={deviceNameInputValue} onChange={(event)=>{
        setDeviceNameInputValue ( event.target.value)
    }}/>
    <button onClick={handleAddFunction}>add</button>
    
    </>)
}