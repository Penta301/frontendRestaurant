// Delete anonymous functions for performance

import Logic from "./Logic";
import { Link } from "react-router-dom";
import ClipboardJS from "clipboard";

function LinkGenerator({ title, restaurant }) {
  new ClipboardJS(".copyButton");
  const { quantity, params } = Logic();

  return (
    <div className="flex flex-col items-center bg-gray-800 p-4 rounded-2xl my-4 border-2 border-indigo-600 shadow-item-custom">
      <h2 className="text-white font-bold tracking-wide">{title}</h2>
      <div className="flex flex-col items-center">
        <div className="flex justify-around items-center gap-6 my-5 rounded-xl shadow-item-custom">
          <p className="px-4 py-2 text-white font-bold">
            Tienes creadas: <span className="text-indigo-600">{quantity}</span>{" "}
            mesas
          </p>
        </div>
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
                <button
                  data-clipboard-text={`http://localhost:3000/table?number=${name}&restaurant=${restaurant}`}
                  className="copyButton text-white font-bold mr-2 hover:text-indigo-600 ease-out duration-150"
                >
                  Copiar
                </button>
                <Link
                  key={"QR_" + name}
                  to={`/QrRoute?number=${name}`}
                  className="text-white font-bold mr-2 hover:text-indigo-600 ease-out duration-150"
                >
                  Qr
                </Link>
                <Link
                  key={name}
                  to={`/table?number=${name}&restaurant=${restaurant}`}
                  className="text-white font-bold mr-2 hover:text-indigo-600 ease-out duration-150"
                >
                  Ir
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
