import React,{useState} from 'react'

function Hooks() {
  const [color, setcolor] = useState("Blue")
  return (
    <div>
        <h1>My favourite color is {color}!</h1>
        <button type='button' onClick={()=>setcolor("Orange")}>Set to orange</button>
    </div>
  )
}

export default Hooks
