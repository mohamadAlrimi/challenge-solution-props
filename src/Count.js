import { useState } from "react"

export default function Count(){
    const [count , setCount] = useState(0)
    function handleClick(){
        setCount(count +1)
    }
    function handleClick1(){
       ( count >0 ? setCount(count -1  ) : alert("tis is the last limet"))
    }
    return(<>
    <h1>The count is : {count} </h1>
    <button onClick={handleClick}>+</button>
    <button onClick={handleClick1}>-</button>
    </>)
}