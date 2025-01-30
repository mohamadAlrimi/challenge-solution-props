
import { useState } from "react"
export default function ArrayList(){
    const [ deviceNameInputValue ,setDeviceNameInputValue]=useState("")
    const[devices ,setDevices]=useState(["iphone ","samsonge" ,"hawawe"])
  
    const devicesList =devices.map((device)=>{
      return(<li>{device}</li>)
    })
    function handleAddFunction(){
        // const newDevices = [...devices]
        // newDevices.push(deviceNameInputValue)
        // setElementName(newArray)
        
        setDevices([...devices , deviceNameInputValue])
    }
    return (<>
    <div>{devicesList}</div>
    <input value={deviceNameInputValue} onChange={(event)=>{
        setDeviceNameInputValue ( event.target.value)
    }}/>
    <button onClick={handleAddFunction}>add</button>
    
    </>)
}