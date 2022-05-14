import Logic from "./Logic";
import Cloudinary from "../../helpers/Cloudinary/Cloudinary";
import { useModal } from "../NotificationModal/ContextModal";

import { useApi } from "../../contexts/ApiContext";

function ShowFoodPanel({ bodysArray, setMethod, handleSetterShow }) {
  const { createImage } = Cloudinary();
  const { deleteFood, handleEditFood } = Logic({
    setMethod,
    handleSetterShow,
    bodysArray,
  });

  const { currentRestaurant } = useApi();

  const { handleShowNotificationModal, setText, setFunctionModal } = useModal();

  const launchNotificationModalDelete = (name) => {
    setText({
      title: "Quieres eliminar este producto?",
      mainText: "Si continuas, eliminaras este producto y toda su informacion",
    });
    setFunctionModal(() => () => deleteFood(name));
    handleShowNotificationModal();
  };

  return (
    <div className="overflow-y-scroll h-full">
      {bodysArray.map((food, index) => {
        const { img, name, price, amount, delay, desc, type_food } = food;
        const id = `${name}_${index}`;
        return (
          <div className="p-2" key={id}>
            <div className="flex gap-2 justify-around ">
              <div className="w-52">
                <div className="rounded-2xl overflow-hidden shadow-item-custom border-2 border-indigo-600">
                  {createImage(img)}
                </div>
              </div>{" "}
              <div className="flex gap-5 flex-wrap flex-col">
                <h2 className="font-bold text-white tracking-wide text-xl">
                  {name}
                </h2>
                <p className="text-white font-bold tracking-wide text-lg border-2 border-indigo-600 text-center p-1 rounded-full custom-smooth-shadow">
                  Precio: <span className="text-indigo-600 ">{price}$ </span>
                </p>
                <p className="text-white font-bold tracking-wide text-lg border-2 border-indigo-600 text-center p-1 rounded-full custom-smooth-shadow">
                  Categoria:{" "}
                  <span className="text-indigo-600 ">{type_food} </span>
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-around p-2 gap-3">
              <p className="text-white tracking-wider text-lg">{desc}</p>
              <div className="flex gap-10 justify-around items-center text-center">
                <p className="text-white font-bold border-2 border-indigo-600 p-2 rounded-full custom-smooth-shadow">
                  Cantidad:{" "}
                  <span className="text-indigo-600">{amount}</span>
                </p>
                <p className="text-white font-bold border-2 border-indigo-600 p-2 rounded-full custom-smooth-shadow">
                  Tiempo: <span className="text-indigo-600">{delay} minutes</span>
                </p>
              </div>
              <div className="flex flex-col gap-5 items-center lg:flex-row lg:justify-around">
                <button
                  className="w-full rounded-2xl text-white p-1 brigth-shadow-red font-bold tracking-wide bg-red-600"
                  onClick={() => launchNotificationModalDelete(name)}
                >
                  Eliminar
                </button>
                <button
                  className="w-full rounded-2xl text-white p-1 brigth-shadow-indigo font-bold tracking-wide bg-indigo-600"
                  onClick={() => handleEditFood(food)}
                >
                  {currentRestaurant.restaurant.accounting
                    ? "Rellenar Stock/Editar"
                    : "Editar"}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ShowFoodPanel;
