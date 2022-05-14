import { useState } from "react";

const Logic = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [showItems, setShowItems] = useState(false);

  const filterMenuAnimation = {
    open: {
      height: 150,
      transition: {
        bounce: 0,
      },
    },
    close: {
      height: 0,
      transition: {
        bounce: 0,
      },
    },
  };

  const variants = {
    open: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.5 * i,
      },
    }),
    close: {
      opacity: 0,
      y: -50,
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

  const handleShow = () => {
    setShowFilter(!showFilter);
    if (!showItems) {
      setTimeout(() => setShowItems(true), 2500);
      return;
    }
    setShowItems(false);
  };

  return {
    filterTypes,
    filterFood,
    showFilter,
    handleShow,
    showItems,
    filterMenuAnimation,
    variants,
  };
};

export default Logic;
