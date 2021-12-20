// Delete anonymous functions for performance

import ContainerCard from "../Card/ContainerCard";

import Logic from "./Logic";
import { Link } from "react-router-dom";

function LinkGenerator({ title, restaurant }) {
  const { quantity, createLinks, handleQuantity, params } = Logic({
    maxQuantity: 100,
  });

  return (
    <div className="flex flex-col items-center bg-gray-800 p-4 rounded-2xl my-4 border-2 border-indigo-600 shadow-item-custom">
      <h2 className="text-white font-bold tracking-wide">{title}</h2>
      <div className="flex flex-col items-center">
        <div className="flex justify-around items-center gap-6 my-5 rounded-xl shadow-item-custom">
          <button
            onClick={handleQuantity}
            className="bg-red-600 brigth-shadow-red px-6 py-2 text-white font-bold text-xl rounded-l-xl"
          >
            -
          </button>
          <p className="px-4 py-2 text-white font-bold text-xl">{quantity}</p>
          <button
            className="bg-indigo-600 brigth-shadow-indigo px-6 py-2 text-white font-bold text-xl rounded-r-xl"
            onClick={() => handleQuantity("more")}
          >
            +
          </button>
        </div>
        <button
          onClick={() => createLinks(quantity, params)}
          className="bg-indigo-600 brigth-shadow-indigo px-4 py-2 text-white font-bold text-xl w-52 rounded-xl tracking-wider my-5"
        >
          Generate
        </button>
      </div>
      <div className="overflow-y-scroll h-40 w-full flex flex-col gap-2">
        {params.map((param) => {
          const { name } = param;
          return (
            <div
              key={name}
              className="flex border-2 rounded-full p-2 shadow-2xl justify-between"
            >
              <p className="text-indigo-600 font-bold tracking-wider ml-2">
                Table: <span className="text-white">{name}</span>
              </p>
              <div className="flex gap-5">
                <button>Copy</button>
                <ContainerCard
                  QRText={`http://localhost:3000/table?number=${name}&restaurant=${restaurant}`}
                  Name={name}
                ></ContainerCard>
                <Link
                  key={name}
                  to={`/table?number=${name}&restaurant=${restaurant}`}
                  className="text-white font-bold mr-2 hover:text-indigo-600 ease-out duration-150"
                >
                  GO
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LinkGenerator;
