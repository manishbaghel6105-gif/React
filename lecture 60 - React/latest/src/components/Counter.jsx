
import {usestate} from 'react'
// import React from 'react'

function Counter(props) {
 const result = useState("manish");
  console.log(result);
   let count = 0 ; 

  function increment(){
    count++;
  }
  function decrement(){
 count--;
  }
  return (
    <div>
      <h1>Counter</h1>
      <button onclick ={increment}>+</button>
      <p>{count}</p>
      <button onclick ={decrement}>-</button>
    </div>
  )
}

export default Counter