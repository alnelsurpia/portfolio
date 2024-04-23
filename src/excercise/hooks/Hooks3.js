import { useRef } from "react";

function Hooks3() {
  const inputElement = useRef();

  const clickHandler = () => {
    alert(inputElement.current.value)
  };

  return (
    <div>
      <input type="text" ref={inputElement} />
      <button onClick={clickHandler}>Click Here</button>
    </div>
  )
}

export default Hooks3
