import { useState } from "react";

const useCounter = (initialValue: number = 0) => {
  const [counter, setCounter] = useState<number>(initialValue);

  return {
    value: counter,
    increment: () => setCounter(prev => (prev += 1)),
    decrement: () => setCounter(prev => (prev -= 1)),
    reset: () => setCounter(initialValue),
    set: (value: number) => () => setCounter(value),
  };
};

export default useCounter;
