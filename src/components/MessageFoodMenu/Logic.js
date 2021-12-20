import { useState, useEffect } from "react";
import { useAnimation } from "framer-motion";

const Logic = (props) => {
  const [showMessages, setShowMessages] = useState(false);
  const animation = useAnimation();

  const handleShow = () => {
    setShowMessages(!showMessages);
  };

  useEffect(() => {
    if (showMessages) {
      animation.start({
        width: "90%",
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
      return;
    }
    animation.start({
      width: "12%",
      transition: {
        type: "spring",
        duration: 1,
        bounce: 0.3,
      },
    });
  }, [animation, showMessages]);

  return { showMessages, handleShow, animation };
};

export default Logic;
