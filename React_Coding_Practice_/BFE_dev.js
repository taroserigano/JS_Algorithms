


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


3.

import {useRef} from 'react'


export function useIsFirstRender(): boolean {
  // your code here
  const isFirst = useRef(true) 

  if(isFirst.current){
    isFirst.current = false 
    return true 
  } 
  return false 

}

// if you want to try your code on the right panel
// remember to export App() component like below

// export function App() {
//   return <div>your app</div>
// }




4. 

import { useRef, useEffect } from "react";

export function usePrevious<T>(value: T): T | undefined {
  /* The ref object is a generic container whose current property is mutable
  and can hold any value, similar to an instance property on a class */
  const ref = useRef();

  // Store current value in ref
  useEffect(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes

  // Return previous value (happens before update in useEffect above)
  return ref.current;
}


6.

import { Ref, useRef, useState, useEffect } from 'react'

export function useHover<T extends HTMLElement>(): [Ref<T | undefined>, boolean] {
  const ref = useRef<T>()
  const [isHovering, setHovering] = useState(false)
  useEffect(() => {
    // false by default if ref.current changes
    setHovering(false)

    const element = ref.current
    if (!element)
      return

    const setYes = () => setHovering(true)
    const setNo = () => setHovering(false)
  
    element.addEventListener('mouseenter', setYes)
    element.addEventListener('mouseleave', setNo)

    return () => {
      element.removeEventListener('mouseenter', setYes)
      element.removeEventListener('mouseleave', setNo)
    }
  }, [ref.current]) // now we could pass a dependency array for better performances.
  return [ref, isHovering]
}











