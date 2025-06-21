
import { useState } from 'react'
function Component() {

  let [counter, setCounter] = useState(0)
  // let counter = 15
  const addValue  = () => {
    if (counter < 20) {
      // setCounter(counter+1);
      setCounter((prevCounter) => prevCounter + 1 )
      setCounter((prevCounter) => prevCounter + 1 )
      setCounter((prevCounter) => prevCounter + 1 )
      setCounter((prevCounter) => prevCounter + 1 )
      
    }

    // counter = counter + 1
   

  }

   const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1 )
    }
    
   }
  return (
    <>
<h1>Our React APP</h1> 
<h3>Counter value : {counter}</h3>
<button onClick={addValue}>Add value{counter} </button>
<button onClick={removeValue}>Remove value {counter}</button>
<p> footer: {counter}</p>
</>
);
}

export default Component;