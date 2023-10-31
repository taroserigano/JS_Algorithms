


1. 

import React, {useState} from 'react'

export function App() {
  const [count, setCount] = useState(0);

  const updateCount = (diff: number) => {
    setCount(prevCount => prevCount + diff)
  }

  return (
    <div>
      <button data-testid="decrement-button" onClick={()=>updateCount(-1)}>-</button>
      <button data-testid="increment-button" onClick={()=>updateCount(1)}>+</button>
      <p>clicked: {count}</p>
    </div>
  )
}




2. 
import React, {useEffect, useRef} from 'react';

export function useTimeout(callback: () => void, delay: number) {

  const callbackRef = useRef(callback)
  callbackRef.current = callback;

  useEffect(()=> {
    const id = setTimeout(()=>callbackRef.current(),delay);
    return () => clearTimeout(id)
  }, [delay])
}










