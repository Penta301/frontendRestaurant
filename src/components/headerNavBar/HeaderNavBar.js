import Logic from "./Logic";

import { useAuth } from "../../contexts/AuthContext";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { BsArrowRightShort } from "react-icons/bs";
import { IconContext } from "react-icons";

function HeaderNavBar() {
  const { navBarShow, setNavBarShow, animationNavBar, handleRoute } = Logic();
  const { currentUser, logOut } = useAuth();

  return (
    <div>
      <motion.div
        className="bg-indigo-600 h-16 m-2 rounded-xl flex justify-around shadow-item-custom"
        animate={animationNavBar}
        initial={{
          width: "4rem",
        }}
      >
        {navBarShow ? (
          <ul className="flex items-center justify-around w-full">
            <li className="text-white font-bold border-gray-800 hover:text-indigo-800 ease-out duration-300">
              {handleRoute()}
            </li>
            <li>
              {currentUser ? (
                <button
                  className="text-white font-bold border-gray-800 hover:text-indigo-800 ease-out duration-300"
                  onClick={logOut}
                >
                  Logout
                </button>
              ) : (
                <Link
                  className="text-white font-bold border-gray-800 hover:text-indigo-800 ease-out duration-300"
                  to="/login"
                >
                  Login
                </Link>
              )}
            </li>
            <li>
              <a
                href="#test"
                className="text-white font-bold  border-gray-800 hover:text-indigo-800 ease-out duration-300"
              >
                Profile
              </a>
            </li>
          </ul>
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
