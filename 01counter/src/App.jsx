import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(5);

  function handleClick() {
    if (counter < 10) setCounter(counter + 1);
  }

  function handleClicke() {
    if (counter > 0) setCounter(counter - 1);
  }

  return (
    <>
      <h1>React! </h1>
      <h2> Counter value : {counter} </h2>

      <button onClick={handleClick}>Add</button>
      <button onClick={handleClicke}>Remove</button>
    </>
  );
}

export default App;
