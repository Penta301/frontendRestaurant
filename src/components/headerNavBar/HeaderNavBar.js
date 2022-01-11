import Logic from "./Logic";

import { useAuth } from "../../contexts/AuthContext";
import { useApi } from "../../contexts/ApiContext";

import { useRef } from "react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { BsArrowRightShort } from "react-icons/bs";
import { IconContext } from "react-icons";

function HeaderNavBar() {
  const { navBarShow, setNavBarShow, navBarAnimation, handleRoute } = Logic();
  const { currentUser, logOut } = useAuth();
  const { currentRestaurant } = useApi();
  const containerRef = useRef(null);

  return (
    <div>
      <motion.div
        className="bg-indigo-600 h-16 m-2 rounded-xl flex justify-around shadow-item-custom"
        variants={navBarAnimation}
        animate={navBarShow ? "open" : "close"}
        initial={{
          width: "4rem",
        }}
        ref={containerRef}
      >
        {navBarShow ? (
          <motion.ul className="flex items-center justify-around w-full">
            {currentUser && (
              <li className="text-white font-bold border-gray-800 hover:text-indigo-800 ease-out duration-300">
                {handleRoute()}
              </li>
            )}
            <li>
              {currentUser ? (
                <button
                  className="text-white font-bold border-gray-800 hover:text-indigo-800 ease-out duration-300"
                  onClick={logOut}
                >
                  Cerrar Sesion
                </button>
              ) : (
                <Link
                  className="text-white font-bold border-gray-800 hover:text-indigo-800 ease-out duration-300"
                  to="/login"
                >
                  Iniciar Sesion
                </Link>
              )}
            </li>
            <li>
              {currentRestaurant.restaurant ? (
                <Link
                  className="text-white font-bold border-gray-800 hover:text-indigo-800 ease-out duration-300"
                  to="/update-restaurant"
                >
                  Editar
                </Link>
              ) : (
                ""
              )}
            </li>
            <li>
              {currentRestaurant.restaurant ? (
                <Link
                  className="text-white font-bold border-gray-800 hover:text-indigo-800 ease-out duration-300"
                  to={`/accounting/${currentRestaurant.restaurant.name}`}
                >
                  Contabilidad
                </Link>
              ) : (
                ""
              )}
            </li>
          </motion.ul>
        ) : (
          ""
        )}
        <div
          onClick={() => setNavBarShow(!navBarShow)}
          className="w-16 h-16 flex items-center justify-center rounded-full"
        >
          <div>
            <IconContext.Provider
              value={{
                className:
                  "text-white cursor-pointer hover:text-indigo-800 ease-out duration-200",
                size: 30,
              }}
            >
              <BsArrowRightShort />
            </IconContext.Provider>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default HeaderNavBar;
