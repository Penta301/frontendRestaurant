import Logic from "./Logic";
import HeaderNavBar from "../headerNavBar/HeaderNavBar";
import { Link } from "react-router-dom";

function Signup() {
  const { emailRef, passRef, confirmRef, handleSubmit, error, loading } =
    Logic();

  return (
    <>
      <HeaderNavBar></HeaderNavBar>
      <div className="flex w-screen h-screen items-center justify-center">
        <div className="border-2 border-gray-600 p-3 px-5 rounded-2xl flex flex-col items-center justify-center gap-5 custom-shadow lg:h-3/4 lg:justify-around ">
          <div className="w-full">
            <h1 className="text-center font-bold text-3xl tracking-wider p-2 border-b-2 border-gray-600">
              Registrarse
            </h1>
          </div>
          {error && (
            <div className="border-2  border-red-500 rounded-md p-3 bg-red-300">
              <p className="uppercase tracking-wide text-white ">{error}</p>
            </div>
          )}
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="flex flex-col items-center gap-5 mb-9 lg:h-full lg:justify-evenly"
          >
            <label htmlFor="email" className="text-2xl font-light uppercase">
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className="
              rounded-md p-2
              outline-none ring-2 ring-gray-300 
              focus:ring-blue-600 tranistion ease-out duration-300 lg:h-12"
              ref={emailRef}
            />
            <label htmlFor="pass" className="text-2xl font-light uppercase">
              Contraseña
            </label>
            <input
              type="text"
              name="pass"
              id="pass"
              className="
              rounded-md p-2
              outline-none ring-2 ring-gray-300 
              focus:ring-blue-600 tranistion ease-out duration-300 lg:h-12"
              ref={passRef}
            />
            <label
              htmlFor="confirmPass"
              className="text-2xl font-light uppercase"
            >
              Confirmar Contraseña
            </label>
            <input
              type="text"
              name="confirmPass"
              id="confirmPass"
              className="
              rounded-md p-2
              outline-none ring-2 ring-gray-300 
              focus:ring-blue-600 tranistion ease-out duration-300 lg:h-12"
              ref={confirmRef}
            />
            <button
              disabled={loading}
              type="submit"
              className="border-2 text-white bg-gray-800 p-2 px-4 rounded-lg uppercase hover:border-blue-600 hover:bg-white hover:text-black transition ease-out duration-300"
            >
              Registrarse
            </button>
          </form>
          <div className="flex w-full justify-around">
            Ya tienes una cuenta?
            <Link
              to="/login"
              className="uppercase text-blue-500 hover:text-black transition ease-out duration-300"
            >
              Iniciar Sesion
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
