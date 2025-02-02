import { wait } from "@testing-library/user-event/dist/utils"
import { useState } from "react"

export default function Buy(){
    const [pending ,setPending]= useState(0)
    const[completed , setCompleted] = useState(0)
     async function handelBuyBUtton(){
        setPending((p)=>{
            return p + 1
        });
        await wait(2000)
      
          setPending((p)=>{
            return p - 1
        });
        setCompleted((c)=>{
            return c + 1
        })
       


    }
    return(<>
    <h1>The pending is   : {pending}</h1>
    <h1>The completed is : {completed}</h1>
    <button onClick={handelBuyBUtton}>Buy</button>
    
    
    </>)
}