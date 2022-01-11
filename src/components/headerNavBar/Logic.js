import { useState } from "react";
import { useLocation, Link } from "react-router-dom";

function Logic() {
  const location = useLocation();
  const [navBarShow, setNavBarShow] = useState(false);

  const navBarAnimation = {
    open: {
      width: "98%",
      transition: {
        type: "spring",
        duration: 1,
        bounce: 0.3,
      },
    },
    close: {
      width: "4rem",
      transition: {
        type: "spring",
        duration: 1,
        bounce: 0.3,
      },
    },
  };

  const handleRoute = () => {
    if (location.pathname !== "/") {
      return (
        <Link
          className="text-white font-bold border-gray-800 hover:text-indigo-800 ease-out duration-300"
          to="/"
        >
          Casa
        </Link>
      );
    }
    return (
      <Link
        className="text-white font-bold border-gray-800 hover:text-indigo-800 ease-out duration-300"
        to="/dashboard"
      >
        Panel
      </Link>
    );
  };

  return {
    navBarShow,
    setNavBarShow,
    handleRoute,
    navBarAnimation,
  };
}
export default Logic;
