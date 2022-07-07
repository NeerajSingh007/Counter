import { useState} from "react";

 function Counter(){
    

     const [counter, setcounter] = useState(0);

     const cal = (value) => {
         setcounter(counter + value);
     }
     return (
        
        <div >Counter: <h1>{counter}</h1>
          <div>
                 <button onClick={() => {cal(5)}}>ADD</button>
                 <button onClick={() => {cal(-5)}}>REDUCE</button>
               
               
             </div>
             </div>
      
     )
 }
 export {Counter};