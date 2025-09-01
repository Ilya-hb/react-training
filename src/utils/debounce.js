import { useEffect, useState } from "react";

export default function useDebounce(value, delay = 250) {
  const [debouncedVal, setDebouncedVal] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedVal(value);
    }, delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debouncedVal;
}
