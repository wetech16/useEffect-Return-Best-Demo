import React, { useState, useEffect } from "react";
import InputBase from "@material-ui/core/InputBase";
import "./App.css";

//result: without return, it return multiples input
//with return(), it only returns one input
function App() {
  const [item, setItem] = useState("text");
  useEffect(() => {
    // Update value after delay
    const handler = setTimeout(() => {
      console.log(item);
    }, 3000);

    // Cancel the timeout if value changes (also on delay change or unmount)
    // This is how we prevent value from updating if value is changed ...
    // .. within the delay period. Timeout gets cleared and restarted.
    return () => {
      clearTimeout(handler);
    };
    //!!!!! try without  return () => clearTimeout(handler);
  }, [item]);
  return (
    <div className="App">
      <InputBase
        defaultValue={item}
        multiline
        fullWidth
        rowsMax={1}
        onChange={(e) => setItem(e.target.value)}
      />
    </div>
  );
}

export default App;
