import { useState } from "react";

const Logic = () => {
  const [showMessages, setShowMessages] = useState(false);

  const handleShow = () => {
    setShowMessages(!showMessages);
  };

  const messageBarAnimation = {
    open: {
      width: "90%",
      transition: {
        type: "spring",
        duration: 1,
        bounce: 0.3,
      },
    },

    close: {
      width: "12%",
      transition: {
        type: "spring",
        duration: 1,
        bounce: 0.3,
      },
    },
  };

  return { showMessages, handleShow, messageBarAnimation };
};

export default Logic;
