import { useState } from "react";
import "./App.css";

function App() {
  const [value, newValue] = useState(0);
  console.log({ value });
  return (
    <div className="App">
      <div>
        <button onClick={() => newValue(value + 1)}>Count</button>
      </div>
      u clicked {value} times
    </div>
  );
}

export default App;
