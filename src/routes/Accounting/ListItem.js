import Logic from "./Logic";

import { motion } from "framer-motion";
import { useRef } from "react";
import { IconContext } from "react-icons";
import { BsChevronDown } from "react-icons/bs";

const ListItem = ({ arr, title }) => {
  const { showData, handleShow, listAnimation, variantsContainer, variants } =
    Logic();
  const containerRef = useRef(null);

  return (
    <div className="border-2 border-indigo-600 shadow-item-custom p-2 rounded-2xl flex flex-col gap-2 items-center">
      <h3 className="text-white font-medium border-b-2 border-indigo-600 w-full text-center">
        {title}
      </h3>
      <motion.div
        variants={listAnimation}
        initial={false}
        animate={showData ? "open" : "closed"}
        ref={containerRef}
        className="w-full"
      >
        <motion.div
          variants={variants}
          className="flex justify-between border-2 border-indigo-600 w-full text-white font-bold rounded-r-2xl rounded-l-2xl px-2 gap-5"
        >
          <h3 className="p-2 border-indigo-600 h-full">Nombre:</h3>
          <h3 className="border-l-4 p-2 border-indigo-600 h-full ">
            Cantidad de usos:
          </h3>
        </motion.div>
        <motion.ul variants={variantsContainer} className="w-full">
          {arr.map((food) => {
            const { name, amount } = food;
            const id = name + amount;
            return (
              <motion.li
                initial={false}
                key={id}
                variants={variants}
                className="flex w-full justify-between p-2 gap-5 my-2"
              >
                <h3 className="text-white font-bold">{name}</h3>
                <h3 className="text-white font-bold px-2 border-2 border-indigo-600 rounded-full shadow-item-custom">
                  {amount}
                </h3>
              </motion.li>
            );
          })}
        </motion.ul>
      </motion.div>

      <IconContext.Provider
        value={{
          className:
            "z-50 cursor-pointer text-white hover:text-indigo-600 ease-out duration-300",
          size: 30,
        }}
      >
        <BsChevronDown onClick={handleShow}></BsChevronDown>
      </IconContext.Provider>
    </div>
  );
};

export default ListItem;
