
import { useState } from "react"
export default function MyForm(){
    const [formInput , setFormInput] = useState({name:"" ,email:""});
    return ( <>
     <form style={{padding :"100px"}} onSubmit={(event)=>{
        event.preventDefault();
     }}>
        <label>Name:</label>
        <input value={formInput.name} onChange={(event) =>{
            setFormInput({name: event.target.value});
        }}/>
        <hr></hr>

        <label>Email:</label>
        <input value={formInput.email} onChange={(event) =>{
            setFormInput({email: event.target.value});
        }}/>
        <hr></hr>
        
        
        </form></>)
}