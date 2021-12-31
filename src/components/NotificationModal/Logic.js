import { useState, useEffect } from "react";

function Logic() {
  const [height, setHeight] = useState();
  useEffect(() => {
    if (window.innerHeight <= 600) {
      const height = window.innerHeight / 6;
      setHeight(height);
      return;
    }
    const height = window.innerHeight / 4;
    setHeight(height);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.innerHeight]);
  return { height };
}

export default Logic;
