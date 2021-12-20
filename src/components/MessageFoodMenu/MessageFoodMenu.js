import Logic from "./Logic";

import { motion } from "framer-motion";

import { IconContext } from "react-icons";
import { BiMessageDetail } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const MessageFoodMenu = ({ call_waitres, getBill }) => {
  const { animation, showMessages, handleShow } = Logic();

  return (
    <motion.div
      animate={animation}
      className="fixed bottom-0 right-0 mr-5 mb-5 bg-gray-800 flex items-center justify-around rounded-full shadow-item-custom p-2 cursor-pointer border-2 border-indigo-500 gap-10"
    >
      {showMessages ? (
        <motion.div
          initial={{ opacity: 0, display: "none" }}
          animate={{
            opacity: 1,
            display: "flex",
            transition: { duration: 1.2 },
          }}
          exit={{ opacity: 0 }}
          className="w-5/6 flex justify-around gap-5"
        >
          <button
            className="border-2 border-indigo-600 shadow-item-custom rounded-2xl text-white p-2 hover:bg-indigo-800 ease-out duration-300"
            onClick={call_waitres}
          >
            Waiter
          </button>
          <button
            onClick={getBill}
            className="border-2 border-indigo-600 shadow-item-custom rounded-2xl text-white p-2 hover:bg-indigo-800 ease-out duration-300"
          >
            Bill
          </button>
        </motion.div>
      ) : (
        ""
      )}
      <IconContext.Provider
        value={{
          className:
            "w-6 h-6 text-white cursor-pointer hover:text-indigo-600 ease-out duration-200",
        }}
      >
        {showMessages ? (
          <AiOutlineClose onClick={handleShow}></AiOutlineClose>
        ) : (
          <BiMessageDetail onClick={handleShow} />
        )}
      </IconContext.Provider>
    </motion.div>
  );
};

export default MessageFoodMenu;
