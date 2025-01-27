import { useState } from "react";
export default function MyBottun() {
  const [name , setName] = useState("muhammed");
//   const value =state[0];
//   const setvalue =state[1];
  function buttonClick() {
  (name ==="muhammed" ? setName("ahmed"):setName("muhammed"))
 
  }
  return (
    <>
      <button onClick={buttonClick}>Click me</button>
      <h1>{name}</h1>
    </>
  );
}
