import { useState } from "react";
export default function MyBottun() {
  const state = useState("muhammed");
  const value =state[0];
  const setvalue =state[1];
  function buttonClick() {
    setvalue("Ahmed");
  }

  return (
    <>
      <button onClick={buttonClick}>Click me</button>
      <h1>{value}</h1>
    </>
  );
}
