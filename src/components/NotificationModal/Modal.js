import { motion } from "framer-motion";
import Logic from "./Logic";
import "../FoodMenu/index.css";

const Modal = ({ children, show, functionAccept, close, text }) => {
  const { height } = Logic();

  return (
    <>
      {show && (
        <motion.div
          animate={{ y: height }}
          className="absolute w-full h-screen flex justify-center z-50"
        >
          <div className="h-fit m-2 my-20 brigth_border shadow-item-custom rounded-2xl p-4 background flex flex-col gap-5">
            <h2 className="main_text text-lg text-center bottom_brigth_border font-bold tracking-wide">
              {text.title}
            </h2>
            <p className="text-white">{text.mainText}</p>
            <div className="flex justify-around w-full ">
              <button
                className="border-2 border-red-600 bg-gray-800 text-red-600 p-2 rounded-full text-white shadow-item-custom font-bold"
                onClick={close}
              >
                Cancelar
              </button>
              <button
                className="border-2 border-green-600 bg-gray-800 text-green-600 p-2 rounded-full text-white shadow-item-custom font-bold"
                onClick={() => functionAccept()}
              >
                Aceptar
              </button>
            </div>
          </div>
        </motion.div>
      )}
      {children}
    </>
  );
};

export default Modal;
