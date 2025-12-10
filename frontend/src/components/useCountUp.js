import { useEffect, useState } from "react";

export default function useCountUp(target, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target.toString().replace(/[^0-9]/g, "")); 
    if (isNaN(end) || end === 0) return;

    const increment = end / (duration / 16); 
    const step = () => {
      start += increment;
      if (start < end) {
        setCount(Math.floor(start));
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(step);
  }, [target, duration]);

  return count;
}
