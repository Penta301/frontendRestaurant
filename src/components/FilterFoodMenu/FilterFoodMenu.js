import { motion } from "framer-motion";
import { IconContext } from "react-icons";
import { BsChevronDown } from "react-icons/bs";

import Logic from "./Logic";

const FilterFoodMenu = ({ arrayFood, setCopyArr, colorScheme }) => {
  const {
    filterTypes,
    filterFood,
    showFilter,
    animationFilter,
    setShowFilter,
  } = Logic();
  return (
    <motion.div
      animate={animationFilter}
      className="p-2 py-4 bottom_brigth_border my-5 flex items-center flex-col gap-5"
    >
      {showFilter ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex flex-wrap items-center justify-center gap-5"
        >
          {filterTypes(arrayFood).map((type_food) => (
            <button
              key={type_food}
              className="main_text font-bold p-2 px-4 rounded-2xl brigth_border shadow-item-custom"
              onClick={() => filterFood(type_food, setCopyArr, arrayFood)}
            >
              {type_food}
            </button>
          ))}
        </motion.div>
      ) : (
        ""
      )}
      <motion.div onClick={() => setShowFilter(!showFilter)}>
        <IconContext.Provider
          value={{
            className: "cursor-pointer",
            color: colorScheme.main_text,
            size: 30,
          }}
        >
          <BsChevronDown></BsChevronDown>
        </IconContext.Provider>
      </motion.div>
    </motion.div>
  );
};

export default FilterFoodMenu;
