import { useState} from "react";
import './Counter.css';
 function Counter(){
    

     const [counter, setcounter] = useState(0);

     const cal = (value) => {
         setcounter(counter + value);
     }
     return (
        
             <div >Counter: <h1 className={ counter%2 === 0 ? "even" : "odd" }>{counter}</h1>
          <div>
                 <button onClick={() => {cal(1)}}>Increament</button>
                 <button onClick={() => {cal(-1)}}>Decreament</button>
                 <button onClick={() => {cal(counter*1)}}>Double</button>
               
             </div>
         </div>
     )
 }
 export {Counter};