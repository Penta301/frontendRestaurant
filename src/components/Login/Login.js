import Logic from "./Logic";
import HeaderNavBar from "../headerNavBar/HeaderNavBar";

import { AiOutlineEye } from "react-icons/ai";
import { AiTwotoneEyeInvisible } from "react-icons/ai";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

function Login() {
  const {
    error,
    handleSubmit,
    emailRef,
    passRef,
    loading,
    showPassWord,
    setShowPassword,
  } = Logic();

  return (
    <>
      <HeaderNavBar></HeaderNavBar>
      <div className="flex w-screen h-screen items-center justify-center">
        <div className="border-2 border-gray-600 p-3 px-5 rounded-2xl flex flex-col items-center justify-center gap-5 custom-shadow lg:h-3/4 lg:justify-around shadow-item-custom">
          <div className="w-full">
            <h1 className="text-center font-bold text-3xl tracking-wider p-2 border-b-2 border-gray-600">
              Iniciar Sesion
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
              w-[86%]
              rounded-md p-2
              shadow-item-custom
              outline-none ring-2 ring-gray-300 
              focus:ring-blue-600 tranistion ease-out duration-300 lg:h-12 "
              ref={emailRef}
            />
            <label htmlFor="pass" className="text-2xl font-light uppercase">
              Contraseña
            </label>
            <div className="flex items-center justify-around w-full">
              <input
                type={showPassWord ? "password" : "text"}
                name="pass"
                id="pass"
                className="
              rounded-md p-2
              shadow-item-custom
              outline-none ring-2 ring-gray-300 
              focus:ring-blue-600 tranistion ease-out duration-300 lg:h-12"
                ref={passRef}
              />
              <button
                onClick={() => setShowPassword(!showPassWord)}
                type="button"
              >
                <IconContext.Provider
                  value={{
                    className: "border-2 rounded-full p-2 shadow-item-custom",
                    size: 45,
                  }}
                >
                  {showPassWord ? <AiOutlineEye /> : <AiTwotoneEyeInvisible />}
                </IconContext.Provider>
              </button>
            </div>
            <div className="flex w-full justify-around items-center gap-4">
              <Link
                to="/forgot-password"
                className="border-2 border-blue-600 text-black bg-white p-2 px-4 rounded-lg uppercase hover:border-gray-300 hover:bg-gray-800 hover:text-white transition ease-out duration-300"
              >
                Olvidaste contraseña?
              </Link>
              <button
                disabled={loading}
                type="submit"
                className="border-2 text-white bg-gray-800 p-2 px-4 rounded-lg uppercase hover:border-blue-600 hover:bg-white hover:text-black transition ease-out duration-300"
              >
                Iniciar Sesion
              </button>
            </div>
          </form>
          <div className="flex w-full justify-around">
            Necesitas una cuenta?
            <Link
              to="/signup"
              className="uppercase text-blue-500 hover:text-black transition ease-out duration-300"
            >
              Registrarse
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
