
import { useState } from "react"
export default function MyForm(){
    const [formInput , setFormInput] = useState({name:"" ,email:"" ,age :"" ,generalInfo :""});

    // if (!formInput.name || !formInput.email || !formInput.age) {
    //     alert("All fields are required!");
    //     return;
    //   }
    return ( <>  
{/* ///////////////////////////////  */}




 {/* //////////////////////////////////// */}

     <form style={{padding :"100px" } } onSubmit={(event)=>{
        event.preventDefault();
        console.log(formInput)
        setFormInput({ name: "", email: "", message: "" ,age :"" ,generalInfo :""});

     }}>
        <label>Name:</label>
        <input value={formInput.name} onChange={(event) =>{
            setFormInput({...formInput , name : event.target.value});
        }}/>
        <hr></hr>

        <label>Email:</label>
        <input value={formInput.email} onChange={(event) =>{
            setFormInput({...formInput , email : event.target.value});
        }}/>
        <hr></hr>
        <label>Age:</label>
        <input value={formInput.age} onChange={(event) =>{
            setFormInput({...formInput , age : event.target.value});
        }}/>   <hr></hr>
        <label>General Info </label>
        <textarea value={formInput.generalInfo} 
        onChange={(event)=>{
            setFormInput({...formInput , generalInfo : event.target.value})
        }}/>
        <hr></hr>
        <button 
         disabled={!formInput.name || !formInput.email || !formInput.age}
         >Submit</button>
        
        
        </form></>)
}