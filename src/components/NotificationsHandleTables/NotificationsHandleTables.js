import { useModal } from "../NotificationModal/ContextModal";

import { BsCheck2 } from "react-icons/bs";
import { IconContext } from "react-icons";

const NotificationsHandleTables = ({
  notification,
  completeQuest,
  completeBill,
}) => {
  const { handleShowNotificationModal, setText, setFunctionModal } = useModal();

  const launchModalWaiter = () => {
    setText({
      title: "Ya se atendio la mesa?",
      mainText: "Una vez marcado como resuelto, se eliminara la notificacion",
    });
    setFunctionModal(() => () => completeQuest(notification));
    handleShowNotificationModal();
  };

  const launchModalBill = () => {
    setText({
      title: "Quieres completar la cuenta?",
      mainText:
        "Una vez marcado como resuelto, se eliminara la notificacion y la cuenta de la mesa se marcara como completada",
    });
    setFunctionModal(() => () => completeBill(notification));
    handleShowNotificationModal();
  };

  if (notification.type_quest === "call_waitres") {
    return (
      <div className="p-2 flex flex-col gap-5">
        <div className="flex p-2 rounded-full border-2 border-green-600 shadow-item-custom text-white font-bold items-center justify-around">
          <p>
            La mesa:{" "}
            <span className="text-green-500">{notification.table}</span>{" "}
            necesita un <span className="text-green-500">camarero</span>
          </p>
          <IconContext.Provider
            value={{
              className:
                "border-2 border-green-600 rounded-full py-1 cursor-pointer shadow-item-custom hover:text-green-600 ease-out duration-300",
              size: 40,
            }}
          >
            <BsCheck2 onClick={launchModalWaiter} />
          </IconContext.Provider>
        </div>
      </div>
    );
  }
  if (notification.type_quest === "get_bill") {
    return (
      <div className="p-2 flex flex-col gap-5">
        <div className="flex p-2 rounded-full border-2 border-blue-600 shadow-item-custom text-white font-bold items-center justify-around">
          <p>
            La mesa: <span className="text-blue-500">{notification.table}</span>{" "}
            quiere la <span className="text-blue-500">cuenta</span>
          </p>
          <IconContext.Provider
            value={{
              className:
                "border-2 border-blue-600 rounded-full py-1 cursor-pointer shadow-item-custom hover:text-blue-600 ease-out duration-300",
              size: 40,
            }}
          >
            <BsCheck2 onClick={launchModalBill} />
          </IconContext.Provider>
        </div>
      </div>
    );
  }
};

export default NotificationsHandleTables;
