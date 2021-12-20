import { motion } from "framer-motion";
import { IconContext } from "react-icons";
import { BsChevronDown } from "react-icons/bs";

import Logic from "./Logic";

const FilterFoodMenu = ({ arrayFood, setCopyArr }) => {
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
      className="p-2 py-4 border-b-2 border-indigo-600 my-5 flex items-center flex-col gap-5"
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
              className="text-white font-bold border-b-2 border-indigo-600  p-2 px-4 rounded-2xl border-2 border-indigo-600 shadow-item-custom hover:text-indigo-600 ease-out duration-300"
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
          value={{ className: "cursor-pointer", color: "white", size: 30 }}
        >
          <BsChevronDown></BsChevronDown>
        </IconContext.Provider>
      </motion.div>
    </motion.div>
  );
};

export default FilterFoodMenu;
