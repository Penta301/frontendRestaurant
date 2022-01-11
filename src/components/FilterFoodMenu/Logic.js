import { useState } from "react";

const Logic = () => {
  const [showFilter, setShowFilter] = useState(false);

  const filterMenuAnimation = {
    open: {
      height: "auto",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    },
    close: {
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
    close: {
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
    close: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  const filterTypes = (arrayFood) => {
    const types = ["All"];
    arrayFood.forEach(({ type_food }) => {
      types.push(type_food);
    });
    const newSet = new Set(types);
    return Array.from(newSet);
  };

  const filterFood = (type_food, setter, arrayFood) => {
    if (type_food === "All") {
      setter(arrayFood);
      return;
    }

    const newArr = arrayFood.filter((food) => food.type_food === type_food);
    setter(newArr);
  };

  return {
    filterTypes,
    filterFood,
    showFilter,
    setShowFilter,
    filterMenuAnimation,
    variantsContainer,
    variants,
  };
};

export default Logic;
