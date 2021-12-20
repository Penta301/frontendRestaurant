import { useState, useEffect } from "react";

const Logic = () => {
  const handleSize = () => {
    if (window.innerWidth > 1000) {
      return window.innerWidth / 1.96;
    }
    return window.innerWidth / 1.83;
  };

  const [width, setWidth] = useState(handleSize());

  const handleScreen = () => {
    setWidth(handleSize());
  };

  useEffect(() => {
    window.addEventListener("resize", handleScreen);
    return window.removeEventListener("resize", handleScreen);
  });

  return { width };
};

export default Logic;
