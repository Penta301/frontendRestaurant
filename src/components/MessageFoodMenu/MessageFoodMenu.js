import Logic from "./Logic";

import { useModal } from "../NotificationModal/ContextModal";

import { motion } from "framer-motion";

import { IconContext } from "react-icons";
import { BiMessageDetail } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const MessageFoodMenu = ({ call_waitres, getBill, colorScheme }) => {
  const { animation, showMessages, handleShow } = Logic();
  const { setText, handleShowNotificationModal, setFunctionModal } = useModal();

  const launchWaiterModal = () => {
    setText({
      title: "Quieres llamar un moso?",
      mainText:
        "Si continuas, los mosos recibiran la notificacion de que tu mesa necesita atencion",
    });
    setFunctionModal(() => call_waitres);
    handleShowNotificationModal();
  };

  const launchBillModal = () => {
    setText({
      title: "Quieres la cuenta?",
      mainText:
        "Si continuas, los mosos recibiran la notificacion de que tu mesa necesita la cuenta",
    });
    setFunctionModal(() => getBill);
    handleShowNotificationModal();
  };

  return (
    <motion.div
      animate={animation}
      className="fixed bottom-0 right-0 mr-5 mb-5 background flex items-center justify-around rounded-full shadow-item-custom p-2 cursor-pointer brigth_border gap-10"
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
            className="brigth_border shadow-item-custom rounded-2xl main_text p-2"
            onClick={launchWaiterModal}
          >
            Waiter
          </button>
          <button
            onClick={launchBillModal}
            className="brigth_border shadow-item-custom rounded-2xl main_text p-2"
          >
            Bill
          </button>
        </motion.div>
      ) : (
        ""
      )}
      <IconContext.Provider
        value={{
          className: "w-6 h-6 cursor-pointer",
          color: colorScheme.main_text,
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
