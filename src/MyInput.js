import { useState } from "react";
export default function MyInput(){
    const [myInputValue ,setMyInputValue] = useState("");
    function handleInputchange(event){
        setMyInputValue(event.target.value);
    

   
       
        
    }
    return(<>
        <label>Your Name:</label>
        <input value={myInputValue} onChange ={handleInputchange}/>
      
        </>)
}