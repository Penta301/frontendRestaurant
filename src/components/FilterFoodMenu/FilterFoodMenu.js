import { motion } from "framer-motion";
import { IconContext } from "react-icons";
import { BsChevronDown } from "react-icons/bs";
import { useRef } from "react";

import Logic from "./Logic";

const FilterFoodMenu = ({ arrayFood, setCopyArr, colorScheme }) => {
  const refContainer = useRef();

  const {
    filterTypes,
    filterFood,
    showFilter,
    setShowFilter,
    filterMenuAnimation,
    variantsContainer,
    variants,
  } = Logic();
  return (
    <div className="bottom_brigth_border p-2 py-4 my-5 flex flex-col items-center justify-center w-full gap-5 h-full">
      <motion.div
        variants={filterMenuAnimation}
        animate={showFilter ? "open" : "close"}
        ref={refContainer}
        initial={false}
        className="flex w-full items-center flex-col gap-5 h-full"
      >
        <motion.div
          variants={variantsContainer}
          className="flex flex-wrap items-center justify-center gap-5"
        >
          {filterTypes(arrayFood).map((type_food) => (
            <motion.button
              key={type_food}
              initial={false}
              variants={variants}
              className="main_text font-bold p-2 px-4 rounded-2xl brigth_border shadow-item-custom"
              onClick={() => filterFood(type_food, setCopyArr, arrayFood)}
            >
              {type_food}
            </motion.button>
          ))}
        </motion.div>
      </motion.div>
      <div onClick={() => setShowFilter(!showFilter)}>
        <IconContext.Provider
          value={{
            className: "z-50 cursor-pointer",
            color: colorScheme.main_text,
            size: 30,
          }}
        >
          <BsChevronDown></BsChevronDown>
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default FilterFoodMenu;
