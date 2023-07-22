import { useState } from "react";
import { Button } from "./Components/Button";
import "./App.css";

function App() {
   const [count, setCount] = useState(0);

   return (
      <>
         <p>{count}</p>
         <Button
            label='Tambah'
            onClick={() => {
               setCount(count + 1);
            }}
            primary
         />
         <Button
            label='Kurangi'
            onClick={() => {
               setCount(count - 1);
            }}
            primary
         />
      </>
   );
}

export default App;
