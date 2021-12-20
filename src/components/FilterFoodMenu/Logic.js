import { useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const Logic = () => {
  const [showFilter, setShowFilter] = useState(false);
  const animationFilter = useAnimation();

  useEffect(() => {
    if (showFilter) {
      animationFilter.start({
        height: "auto",
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
      return;
    }
    animationFilter.start({
      height: "60px",
      transition: {
        type: "spring",
        duration: 1,
        bounce: 0.3,
      },
    });
  }, [animationFilter, showFilter]);

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
    animationFilter,
    showFilter,
    setShowFilter,
  };
};

export default Logic;
