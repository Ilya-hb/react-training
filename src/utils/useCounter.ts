import { useState } from "react";

export default function useCounter(initialValue = 0) {
  const [counter, setCounter] = useState(initialValue);

  return {
    count: counter,
    increment() {
      setCounter(counter + 1);
    },
    decrement() {
      setCounter(counter - 1);
    },
    reset() {
      setCounter(initialValue);
    },
    setCount(number: number) {
      setCounter(number);
    },
  };
}
