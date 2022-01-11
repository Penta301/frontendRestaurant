import { useState } from "react";

const Logic = () => {
  const [showData, setShowData] = useState(false);

  const handleShow = () => {
    setShowData(!showData);
  };

  const listAnimation = {
    open: {
      height: "auto",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    },
    closed: {
      height: 0,
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const variantsContainer = {
    open: {
      transition: { delay: 0.6, staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { delay: 0.6, staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 1,
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return { showData, handleShow, listAnimation, variantsContainer, variants };
};

export default Logic;
