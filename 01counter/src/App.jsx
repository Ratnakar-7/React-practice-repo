import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(5);

  function handleClick(action) {
    if (counter < 10 && action == "incr") setCounter(counter + 1);
    else if (counter > 0 && action == "decr") setCounter(counter - 1);
  }

  return (
    <>
      <h1>React! </h1>
      <h2> Counter value : {counter} </h2>

      <button onClick={() => handleClick("incr")}>Add</button>
      <button onClick={() => handleClick("decr")}>Remove</button>
    </>
  );
}

export default App;
