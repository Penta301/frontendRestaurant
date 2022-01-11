import { withRouter } from "react-router-dom";

import Logic from "./Logic";
import HeaderNavBar from "../../components/headerNavBar/HeaderNavBar";
import CreateFoodPanel from "../../components/CreateFoodPanel/CreateFoodPanel";
import LinkGenerator from "../../components/LinkGenerator/LinkGenerator";
import ShowFoodPanel from "../../components/ShowFoodPanel/ShowFoodPanel";

import { Link } from "react-router-dom";

import { useApi } from "../../contexts/ApiContext";
import { IoMdAdd } from "react-icons/io";
import { IconContext } from "react-icons";

function Dashboard() {
  const { currentRestaurant, arrayFood } = useApi();
  const { show, setMethod, handleSetterShow, sendAndRequest } = Logic();

  return (
    <>
      <HeaderNavBar></HeaderNavBar>
      <div className="p-2">
        <h2 className="font-bold tracking-wider underline text-center p-2 text-2xl">
          Administra tu Negocio
        </h2>
        <div>
          <div className="flex flex-col">
            <LinkGenerator
              title={"Codigo de las mesas"}
              restaurant={currentRestaurant.restaurant.name}
            ></LinkGenerator>
            <Link
              to="/handle-tables"
              className="text-center bg-gray-800 text-white tracking-wide p-2 rounded-full shadow-item-custom border-2 border-indigo-600 text-xl hover:text-indigo-600 ease-out duration-200"
            >
              Administra Tus Mesas
            </Link>
            <div className="flex flex-col border-2 bg-gray-800 items-center my-5 rounded-3xl shadow-item-custom overflow-hidden">
              {/* Create and Show Food Panel */}
              <h4 className="text-white font-bold text-xl p-2">
                {show ? "Crear Articulo" : "Articulos"}
              </h4>
              <div className="overflow-y-scroll h-96 w-full">
                {show ? (
                  <CreateFoodPanel
                    sendAndRequest={sendAndRequest}
                  ></CreateFoodPanel>
                ) : (
                  <ShowFoodPanel
                    bodysArray={arrayFood}
                    handleSetterShow={handleSetterShow}
                    setMethod={setMethod}
                  ></ShowFoodPanel>
                )}
              </div>
            </div>
            <div className="flex w-screen items-end justify-end p-2 my-3">
              <div className="bg-gray-800 flex items-center justify-center rounded-full shadow-item-custom p-2 cursor-pointer border-2 border-indigo-500">
                <IconContext.Provider
                  value={{
                    className:
                      "w-6 h-6 text-white hover:text-indigo-600 ease-out duration-200",
                  }}
                >
                  <IoMdAdd onClick={handleSetterShow} />
                </IconContext.Provider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(Dashboard);
