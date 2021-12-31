import Logic from "./Logic";
import ShowdedOrder from "./ShowdedOrder";

import { useModal } from "../NotificationModal/ContextModal";

function Order({ handleComplete, payTable, title, data, uncompleteOrder }) {
  const {
    calculateCount,
    show,
    completeds,
    filterCompleteds,
    setCompleteds,
    handleShow,
  } = Logic();

  const { setText, setFunctionModal, handleShowNotificationModal } = useModal();

  const launchModalCloseBill = () => {
    setText({
      title: "Quieres cerrar la cuenta?",
      mainText:
        "Si cierras la cuenta, la mesa se marcara como pagada, los pedidos seran marcados como completados y no lo podras modificar",
    });
    setFunctionModal(() => () => payTable(data[0]));
    handleShowNotificationModal();
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col w-full items-center gap-5 p-2">
        <div className="w-full flex justify-around items-center mb-2">
          <h2 className="text-white text-xl font-semibold tracking-widest ">
            Mesa: <span className="text-indigo-600 text-center">{title}</span>
          </h2>
          <button
            onClick={handleShow}
            className="text-white tracking-wide border-2 rounded-full border-indigo-600 p-2 shadow-item-custom hover:text-indigo-600 ease-out duration-300"
          >
            Ver mesa
          </button>
        </div>
        {show ? (
          <div className="flex flex-col gap-5 items-center w-full">
            <h3 className="text-white tracking-wide border-b-2 border-indigo-600">
              Mostar pedidos:
            </h3>
            <div className="flex w-full justify-around items-center text-center">
              <button
                className="w-full rounded-l-2xl text-white p-1 brigth-shadow-red font-bold tracking-wide bg-red-600"
                onClick={() => setCompleteds(false)}
              >
                Incompletos
              </button>
              <button
                className="w-full rounded-r-2xl p-1 text-white font-bold tracking-wider bg-green-600 brigth-shadow-green"
                onClick={() => setCompleteds(true)}
              >
                Completos
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      {show
        ? filterCompleteds(completeds, data).map((quest, index) => {
            const { food, total, _id, completed } = quest;
            const id = `${title}_${total}_${index}`;
            return (
              <ShowdedOrder
                key={id}
                food={food}
                total={total}
                _id={_id}
                completed={completed}
                handleComplete={handleComplete}
                quest={quest}
                uncompleteOrder={uncompleteOrder}
              ></ShowdedOrder>
            );
          })
        : ""}
      <p className="text-white text-xl tracking-wide mb-5 border-b-2 border-indigo-600">
        Ganancia Total: {calculateCount(data)}$
      </p>
      <button
        onClick={launchModalCloseBill}
        className="w-5/6 text-white shadow-item-custom p-2 border-2 border-indigo-600 rounded-full hover:text-indigo-600 ease-out duration-300"
      >
        Cerrar cuenta
      </button>
    </div>
  );
}

export default Order;
