import { motion } from "framer-motion";
import Logic from "./Logic";

const Modal = ({ children, show, functionAccept, close, text }) => {
  const { height } = Logic();

  return (
    <>
      {show && (
        <motion.div
          animate={{ y: height }}
          className="absolute w-full h-screen flex justify-center z-50"
        >
          <div className="h-fit m-2 my-20 border-4 border-indigo-500 shadow-item-custom rounded-2xl p-4 bg-indigo-600 flex flex-col gap-5">
            <h2 className="text-white text-lg text-center border-b-2 border-b-gray-800 font-bold tracking-wide">
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
