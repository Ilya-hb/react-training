import { useEffect, useState } from "react";

export default function useDebounce(value, delay = 250) {
  const [debouncedVal, setDebouncedVal] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedVal(value);
    }, delay);

    // 4. Функция очистки - КЛЮЧЕВАЯ ЧАСТЬ!
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debouncedVal;
}
