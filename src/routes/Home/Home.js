import HeaderNavBar from "../../components/headerNavBar/HeaderNavBar";
import { BsArrowDownShort } from "react-icons/bs";
import { IconContext } from "react-icons";

function Home({ isAuth, closeSession }) {
  return (
    <>
      <HeaderNavBar isAuth={isAuth} closeSession={closeSession}></HeaderNavBar>
      <div className="flex justify-center items-center">
        <div className="flex flex-col items-center bg-gray-800 rounded-3xl m-5 gap-3 p-2 lg:w-11/12 lg:h-11/12 lg:justify-between lg:p-4 shadow-item-custom">
          <h1 className="text-3xl p-2 font-semibold text-indigo-600 text-center border-b-2 border-white lg:text-4xl ">
            Smart Restaurant
          </h1>
          <p className="tracking-wider w-52 text-center mb-5 text-white lg:text-3xl lg:w-9/12">
            Venimos a traerte, la mejor solucion para tus locales, facilitando
            tu administracion, tu comunicacion y tu relacion con tus clientes
          </p>
          <IconContext.Provider
            value={{
              className: "border-2 rounded-full",
              color: "white",
              size: 40,
            }}
          >
            <BsArrowDownShort />
          </IconContext.Provider>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-gray-800 p-4">
        <div className="text-white text-center">
          <h2 className="text-3xl font-semibold">
            Mejor <span className="text-indigo-600">Administracion</span>
          </h2>
          <hr />
          <p className="mt-4 lg:text-xl">
            Este servicio facilitara tu administracion tanto a la hora de
            interactuar con tus clientes, gracias a sus eficientes sistemas de
            comunicacion, como tanto a la hora de manejar tu stock y entender
            las estadisticas de tu local, gracias a su sistema de contabilidad.
          </p>
        </div>
        <div className="flex flex-wrap w-screen gap-4 justify-center mt-5">
          <img
            src="https://images.unsplash.com/photo-1563019880-9b2ea5d89a12?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="restaurant"
            className="w-5/12 rounded-3xl shadow-2xl lg:w-2/12"
          />
          <img
            src="https://images.unsplash.com/photo-1541086095944-f4b5412d3666?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="coffe"
            className="w-5/12 rounded-3xl shadow-2xl lg:w-2/12"
          />
          <img
            src="https://images.unsplash.com/photo-1561221820-5ed0595bcb4c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cmVzdGF1cmFudHxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="restaurant"
            className="w-5/12 rounded-3xl shadow-2xl lg:w-2/12"
          />
          <img
            src="https://images.unsplash.com/photo-1622192309290-cad13f863bcf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="coffe"
            className="w-5/12 rounded-3xl shadow-2xl lg:w-2/12"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-gray-800 p-4 gap-5">
        <div className="text-white text-center">
          <h2 className="text-3xl font-semibold">
            Mejor <span className="text-indigo-600">Comunicacion</span>
          </h2>
          <hr />
          <p className="mt-4 lg:text-xl">
            Desde nuestro menu podras construir tu carta a tu gusto y placer,
            transmitiendo con facilidad aquella informacion que queres que les
            llegue a tus clientes, sin mencionar que ello tendran acceso a
            multiples herramientas que los pondran en contacto directamente con
            tu equipo de trabajo: podran llamar mosos, pedir la cuenta, armar
            sus pedidos y mucho mas...
          </p>
        </div>
        <div className="w-full flex flex-col items-center lg:flex-row lg:justify-around lg:items-start">
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-white font-semibold text-xl tracking-widest my-2 text-center border-b-2">
              Crea tus articulos
            </h2>
            <div className="rounded-3xl overflow-hidden shadow-item-custom">
              <img
                src="https://res.cloudinary.com/dd1xsnzcm/image/upload/v1641918817/create_element_img_definitive_lugdb7.png"
                alt="create element example"
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-white font-semibold text-xl tracking-widest my-2 text-center border-b-2">
              Comparte tus articulos con tu estetica unica
            </h2>
            <div className="rounded-3xl overflow-hidden shadow-item-custom flex w-72">
              <img
                src="https://res.cloudinary.com/dd1xsnzcm/image/upload/v1641918837/showed_item_nj4fij.png"
                alt="showed item example"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-gray-800 p-4 gap-5">
        <div className="text-white text-center">
          <h2 className="text-3xl font-semibold">
            Mejor <span className="text-indigo-600">Relacion</span> con tus
            clientes
          </h2>
          <hr />
          <p className="mt-4 lg:text-xl">
            A la hora de ofrecer tus productos es importante que tus clientes se
            sientan comodos y nosotros entendemos eso, por esta razon "Smart
            Restaurant" te ofrece una gran personalizacion , ademas de un
            conjunto de herramientas a la dispocision de tus clientes para
            relacionarse contigo.
          </p>
        </div>
        <div className="w-full flex flex-col items-center lg:flex-row lg:justify-around lg:items-start">
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-white font-semibold text-xl tracking-widest my-2 text-center border-b-2">
              Personaliza tu carta
            </h2>
            <div className="rounded-3xl overflow-hidden shadow-item-custom flex w-72">
              <img
                src="https://res.cloudinary.com/dd1xsnzcm/image/upload/v1641918828/personalization_products_definitive_mqraum.png"
                alt="personalization_products_definitive example"
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-white font-semibold text-xl tracking-widest my-2 text-center border-b-2">
              Enterate de todo lo que pasa en tiempo real
            </h2>
            <div className="rounded-3xl overflow-hidden shadow-item-custom flex w-72">
              <img
                src="https://res.cloudinary.com/dd1xsnzcm/image/upload/v1641918823/handle_tables_oqytpl.png"
                alt="handle_tables example"
              />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-item-custom flex w-72">
              <img
                src="https://res.cloudinary.com/dd1xsnzcm/image/upload/v1641918822/notification_system_biwlbk.png"
                alt="notification_system example"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
