import QRCode from "qrcode.react";
import Query from "../../helpers/Query/Query";
import { BsArrowRight } from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";
import { IconContext } from "react-icons";

import { useApi } from "../../contexts/ApiContext";

function QrRoute() {
  const query = Query();
  const { currentRestaurant } = useApi();

  const endCut = window.location.href.indexOf("Q") - 1;
  const link = window.location.href.slice(0, endCut);

  const restaurant = currentRestaurant.restaurant.name;
  const table = query.get("number");

  return (
    <div className="w-full min-h-screen bg-gray-800">
      <div className="flex justify-around shadow-item-custom p-4 mb-5 print:hidden">
        <h2 className="font-bold text-white">Imprime el QR de tu mesa</h2>
        <p className="font-bold text-white">
          Esta es la mesa{" "}
          <span className="text-indigo-600 text-xl">{table}</span>
        </p>
      </div>
      <div className="flex flex-col items-center gap-5 print:h-screen print:justify-center">
        <div className="print:border-4 print:border-gray-800 print:h-4/6 print:px-10 p-4 rounded-2xl flex flex-col items-center justify-around gap-5">
          <div className="mb-5 hidden print:block text-center">
            <div className="flex justify-around items-center gap-5">
              <p>Oprime en este elemento para enviar el pedido</p>
              <IconContext.Provider value={{ size: 30 }}>
                <BsArrowRight></BsArrowRight>
              </IconContext.Provider>
              <div className="main_text font-bold brigth_border text-center p-2 px-4 rounded-full custom-smooth-shadow cursor-pointer">
                Total$
              </div>
            </div>
            <div className="flex justify-around items-center gap-5 mt-5">
              <p>Oprime en este elemento para comunicarte</p>
              <IconContext.Provider value={{ size: 30 }}>
                <BsArrowRight></BsArrowRight>
              </IconContext.Provider>
              <div className="flex items-center justify-around rounded-full shadow-item-custom p-2 cursor-pointer brigth_border gap-10">
                <IconContext.Provider value={{ className: "w-6 h-6" }}>
                  <BiMessageDetail></BiMessageDetail>
                </IconContext.Provider>
              </div>
            </div>
            <h2 className="font-bold text-white">
              Esta es la mesa{" "}
              <span className="text-indigo-600 text-xl">{table}</span>
            </h2>
            <p className="font-bold">Escanea el QR para acceder a la carta</p>
          </div>
          <div className="border-2 p-4 rounded-2xl border-indigo-600 shadow-item-custom">
            <QRCode
              value={`${link}/table?number=${table}&restaurant=${restaurant}`}
              size={250}
            />
          </div>
        </div>
        <button
          className="bg-indigo-600 brigth-shadow-indigo px-6 py-2 text-white font-bold text-xl rounded-xl mt-5 print:hidden"
          onClick={() => window.print()}
        >
          Imprimir
        </button>
      </div>
    </div>
  );
}

export default QrRoute;
