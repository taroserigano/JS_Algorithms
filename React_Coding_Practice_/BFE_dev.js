


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


7.
import { useState } from 'react';

export function useToggle(on: boolean): [boolean, () => void] {
  const [toggle, setToggle] = useState(on);
  const toggleHandler = () => setToggle(prevState => !prevState);

  return [toggle, toggleHandler]
}



8. 

import { useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounced(value)
    }, delay);

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debounced
}




9. 

import { EffectCallback, useEffect } from 'react'

export function useEffectOnce(effect: EffectCallback) {
  // your code here
  useEffect(effect, [])
}

10. 

import { useState, useCallback, useMemo } from 'react'

type UseArrayActions<T> = {
  push: (item: T) => void,
  removeByIndex: (index: number) => void
}

export function useArray<T>(initialValue: T[]): { value: T[] } & UseArrayActions<T> {
  const [value, setValue] = useState<T[]>(initialValue);

  const push = useCallback((item: T) => setValue((prev) => [...prev, item]), []);
  const removeByIndex = useCallback((index: number) => setValue((prev) => {
    const copy = prev.slice();
    copy.splice(index, 1);
    return copy;
  }), []);

  return useMemo(() => ({ value, push, removeByIndex }), [value, push, removeByIndex]);
}


11. 

import React, { useRef, useEffect } from 'react';

export function useIsMounted(): () => boolean {
  // your code here
  const isMountedRef = useRef(false);

  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    }
  }, [])

  return () => isMountedRef.current;
}

14. 



// This is a React coding question from BFE.dev

import React,{useEffect, useRef}  from 'react'

export function useClickOutside(callback: () => void) {
  // your code here
    const ref = useRef<any>(null)
    useEffect(() => {
    const click = ({ target }: Event): void => {
      if (target && ref.current && !ref.current.contains(target as Node)) {
        callback()
      }
    }

    document.addEventListener('mousedown', click)
    
    return () => {
      document.removeEventListener('mousedown', click)
    }
  }, [])

  return ref
}

// to try your code on the right panel
// export App() component like below

// export function App() {
//   return <div>your app</div>
// }











