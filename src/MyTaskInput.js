import { useState } from "react";
export default function MyTaskInput() {
    const [player, setPlayer] = useState({
      firstName: 'muhammed',
      lastName: 'elrimi',
      score: 10,
    });
   
    function handlePlusClick() {
      setPlayer({
        ...player,
        score: player.score + 1,
      });
    }
  
    function handleFirstNameChange(e) {
      setPlayer({
        ...player,
        firstName: e.target.value,
      });
    }
  
    function handleLastNameChange(e) {
      setPlayer({
        ...player,
        lastName: e.target.value
      });
    }
  
    return (
      <>
        <label>
          Score: <b>{player.score}</b>
          {' '}
          <button onClick={handlePlusClick}>
            +1
          </button>
        </label>
        <hr></hr>
        <label>
          First name:
          <input
            value={player.firstName}
            onChange={handleFirstNameChange}
          />
        </label>
        <hr></hr>
        <label>
          Last name:
          <input
            value={player.lastName}
            onChange={handleLastNameChange}
          />
        </label>
      </>
    );
  }