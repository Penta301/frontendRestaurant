import HeaderNavBar from "../../components/headerNavBar/HeaderNavBar";
import Services from "./Services";
import { useApi } from "../../contexts/ApiContext";
import Logic from "./Logic";
import { IconContext } from "react-icons";
import { BsArrowDownShort } from "react-icons/bs";

function PayService() {
  const { currentRestaurant } = useApi();
  const { handleFeature } = Logic();

  return (
    <>
      <HeaderNavBar></HeaderNavBar>
      {currentRestaurant.service ? (
        <div className="p-4 flex flex-col items-center gap-5">
          <h4 className="border-2 text-xl border-gray-600 p-2 w-full rounded-md text-center custom-smooth-shadow">
            Tu plan ya ha sido registrado, estamos realizando las validaciones;
            esto puede llevar tiempo, recuerda realizar tu transferencia al
            siguiente CBU, si es que aun no lo has hecho:
          </h4>
          <div className="flex flex-col items-center gap-2 text-xl bg-gray-800 text-white p-2 rounded-md shadow-item-custom pb-10">
            <h4 className="border-b-2 border-white">
              El CBU:{" "}
              <span className="font-bold text-indigo-600">
                1430001713025406130018
              </span>
            </h4>
            <p>Debes abonar deacuerdo a tu plan, tu plan es el siguiente:</p>
            <div className="flex flex-col justify-center items-center p-4 rounded-2xl shadow-item-custom gap-2 bg-white">
              <h1 className="text-xl border-b-2 border-gray-800 font-bold tracking-wide text-gray-800 w-full text-center">
                {currentRestaurant.service.type_plan}
              </h1>
              <div className="w-full flex flex-col items-center gap-2">
                <h2 className="text-gray-800">Caracteristicas:</h2>
                <ul className="px-5">
                  {handleFeature(currentRestaurant.service.type_plan).map(
                    (feature) => (
                      <li className="font-bold text-indigo-600">{feature}</li>
                    )
                  )}
                </ul>
              </div>
              <h3 className="font-light text-gray-800 pb-3">
                Price: {currentRestaurant.service.value}$
              </h3>
            </div>
          </div>
          <IconContext.Provider
            value={{
              className: "border-2 rounded-full custom-smooth-shadow",
              color: "indigo",
              size: 50,
            }}
          >
            <BsArrowDownShort />
          </IconContext.Provider>
          <div className="flex flex-col items-center gap-2 text-xl bg-gray-800 text-white p-2 rounded-md shadow-item-custom pb-5">
            <h4 className="border-b-2 border-white">
              Contacto:{" "}
              <span className="font-bold text-indigo-600">
              +54 2657-638252
              </span>
            </h4>
            <p className="px-2">Si ya has abonado, comunicate a este numero por Whatsapp y envia el gmail de tu usuario</p>
            </div>
          </div>
      ) : (
        <Services></Services>
      )}
    </>
  );
}

export default PayService;
