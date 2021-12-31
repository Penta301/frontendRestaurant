import { motion } from "framer-motion";
import { useModal } from "../NotificationModal/ContextModal";

import { IconContext } from "react-icons";
import { AiOutlineClose } from "react-icons/ai";

function QuestModal({ setter, data, newQuest, handleQuest }) {
  const { setText, setFunctionModal, handleShowNotificationModal } = useModal();

  const launchNotificationModalSend = () => {
    setText({
      title: "Tu pedido esta completo?",
      mainText:
        "Una vez le des a enviar, el pedido sera mandado a cocina y no podras cancelarlo desde la aplicacion",
    });
    setFunctionModal(() => newQuest);
    handleShowNotificationModal();
  };

  return (
    <motion.div
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
      layoutId={"label"}
      className="flex fixed justify-center items-center w-full h-screen"
    >
      <div className="flex flex-col background p-6 gap-5 rounded-3xl shadow-item-custom brigth_border">
        <h2 className="main_text text-center font-bold tracking-wider text-3xl">
          Order
        </h2>
        <p className="main_text font-bold brigth_border text-center p-2 px-4 rounded-full custom-smooth-shadow text-xl">
          Total = <span className="text_brigth">{data.total}$</span>
        </p>
        <div className="shadow-item-custom px-6 rounded-3xl max-h-60 overflow-y-scroll">
          <h2 className="text_brigth text-center font-bold text-2xl py-2">
            Food
          </h2>
          <div className="py-2">
            {data.food.map((food, index) => {
              const { name, quantity, price } = food;
              return (
                <ul key={`${index}_${name}`}>
                  <li className="flex items-center justify-around main_text text-lg text-left py-2">
                    {name}{" "}
                    <span className="brigth_border px-2 rounded-full ml-5 text_brigth custom-smooth-shadow text-center">
                      {quantity}
                    </span>
                    <IconContext.Provider
                      value={{
                        className:
                          "brigth_border p-1 rounded-full ml-5 text_brigth custom-smooth-shadow text-center cursor-pointer",
                        size: 30,
                      }}
                    >
                      <AiOutlineClose
                        onClick={() =>
                          handleQuest({ price: parseInt(price), name }, "less")
                        }
                      ></AiOutlineClose>
                    </IconContext.Provider>
                  </li>
                </ul>
              );
            })}
          </div>
        </div>
        <div className="flex justify-around items-center text-center">
          <button
            className="w-full rounded-l-2xl main_text p-1 brigth_shadow_cancel font-bold tracking-wide cancel_background cursor-pointer"
            onClick={setter}
          >
            Cancel
          </button>
          <button
            onClick={launchNotificationModalSend}
            className="w-full rounded-r-2xl p-1 main_text font-bold tracking-wider brigth_background brigth_shadow"
          >
            Send
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default QuestModal;
