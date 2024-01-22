import React from 'react'
import {useToggle} from "./useToggle";

const State1 = () => {
    const [isVisible, toggle] = useToggle();
  return (
    <div>
      <button onClick={toggle}>{isVisible ? "Hide":"Show"}</button>
      {isVisible && <h1>Hidden text</h1>}
    </div>
  )
}

export default State1
