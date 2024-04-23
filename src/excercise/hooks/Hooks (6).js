import React,{useState,useMemo} from 'react'
function Hooks() {
  const [countOne, setcountOne] = useState(0)
  const [countTwo, setcountTwo] = useState(0)
  const incrementOne=()=>{
    setcountOne(countOne+1)
  }
  const incrementTwo=()=>{
    setcountTwo(countTwo+1)
  }
  const isEven=useMemo(() =>{ 
  let i=0
  while(i<1000000000)i++
  return countOne % 2 == 0 }, [countOne])
  return (
    <div>
      <div>
        <button onClick={incrementOne}>CountOne - {countOne} </button>
        <span> - {isEven ? 'Even':'Odd'}</span>
      </div>
      <div>
        <button onClick={incrementTwo}>CountTwo - {countTwo}</button>
      </div>
    </div>
  )
}

export default Hooks
