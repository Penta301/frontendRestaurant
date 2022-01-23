import { motion, AnimatePresence } from "framer-motion";
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
    showItems,
    handleShow,
    filterMenuAnimation,
    variants,
  } = Logic();

  return (
    <div className="bottom_brigth_border p-2 py-4 my-5 flex flex-col items-center justify-center w-full gap-5 h-full">
      <motion.div
        variants={filterMenuAnimation}
        animate={showFilter ? "open" : "close"}
        ref={refContainer}
        initial={false}
        className="flex w-full items-center flex-col gap-5 overflow-y-scroll"
      >
        <div className="flex flex-wrap items-center justify-center gap-5">
          {
            <AnimatePresence>
              {showItems &&
                filterTypes(arrayFood).map((type_food, i) => (
                  <motion.button
                    variants={variants}
                    custom={i}
                    initial={"close"}
                    animate={"open"}
                    exit={"close"}
                    key={type_food}
                    className="main_text font-bold p-2 px-4 rounded-2xl brigth_border "
                    onClick={() => filterFood(type_food, setCopyArr, arrayFood)}
                  >
                    {type_food}
                  </motion.button>
                ))}
            </AnimatePresence>
          }
        </div>
      </motion.div>
      <div onClick={handleShow}>
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
