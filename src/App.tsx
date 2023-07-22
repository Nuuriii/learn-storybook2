import { useState } from "react";
import { Button } from "./Components/Button";
import "./App.css";

function App() {
   const [count, setCount] = useState(0);

   return (
      <>
         <Button label='Button' onClick={() => {}} primary />
      </>
   );
}

export default App;
