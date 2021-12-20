import { BsCheck2 } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { IconContext } from "react-icons/lib";

const ShowdedOrder = ({
  food,
  total,
  _id,
  completed,
  handleComplete,
  quest,
  uncompleteOrder,
}) => {
  return (
    <div className=" flex flex-col w-full p-2">
      <ul className=" border-green-600 w-full flex flex-col gap-5">
        {" "}
        {food.map((food, index) => {
          const id = `${food.name}_${food.price}_${index}`;
          return (
            <li key={id} className="w-full">
              {completed ? (
                <div className="flex justify-around border-2 rounded-full p-4 border-green-600 shadow-item-custom">
                  <h4 className="text-white">{food.name}</h4>
                  <h4 className="text-white font-bold tracking-wider">
                    {food.price}
                    <span className="text-green-600">$</span>
                  </h4>
                  <h4 className="text-white">
                    Cantidad:{" "}
                    <span className="font-bold p-2 border-2 border-green-600 rounded-full">
                      {food.quantity}
                    </span>
                  </h4>
                </div>
              ) : (
                <div className="flex justify-around border-2 rounded-full p-4 border-red-600 shadow-item-custom">
                  <h4 className="text-white">{food.name}</h4>
                  <h4 className="text-white font-bold tracking-wider">
                    {food.price}
                    <span className="text-red-600">$</span>
                  </h4>
                  <h4 className="text-white">
                    Cantidad:{" "}
                    <span className="font-bold p-2 border-2 border-red-600 rounded-full">
                      {food.quantity}
                    </span>
                  </h4>
                </div>
              )}
            </li>
          );
        })}
      </ul>
      {completed ? (
        <div className="flex w-full justify-end p-4">
          <p className="text-white tracking-wider text-right p-4 rounded-full border-2 border-green-800 shadow-item-custom">
            Precio: {total}
            <span className="text-green-600">$</span>
          </p>
        </div>
      ) : (
        <div className="flex w-full justify-end p-4">
          <p className="text-white tracking-wider text-right p-4 rounded-full border-2 border-red-800 shadow-item-custom">
            Precio: {total}
            <span className="text-red-600">$</span>
          </p>
        </div>
      )}
      {/* Delete the arrow function, for more performance and for avoid bugs */}
      <div className="w-full flex justify-center items-center my-5">
        {completed ? (
          <button
            className="w-5/6 text-white border-2 border-red-600 tracking-wide p-2 rounded-full shadow-item-custom hover:text-red-600 ease-out duration-300"
            onClick={() => uncompleteOrder(quest, _id)}
          >
            Volver a incompleto
          </button>
        ) : (
          <button
            className="w-5/6 text-white border-2 border-green-600 tracking-wide p-2 rounded-full shadow-item-custom hover:text-green-600 ease-out duration-300"
            onClick={() => handleComplete(_id, quest)}
          >
            Completar pedido
          </button>
        )}
      </div>
    </div>
  );
};

export default ShowdedOrder;
