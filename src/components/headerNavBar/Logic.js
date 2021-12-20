import { useState, useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useLocation, Link } from "react-router-dom";

function Logic() {
  const location = useLocation();
  const [navBarShow, setNavBarShow] = useState(false);
  const animationNavBar = useAnimation();

  useEffect(() => {
    if (navBarShow) {
      animationNavBar.start({
        width: "98%",
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
      return;
    }
    animationNavBar.start({
      width: "4rem",
      transition: {
        type: "spring",
        duration: 1,
        bounce: 0.3,
      },
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navBarShow]);

  const handleRoute = () => {
    if (location.pathname !== "/") {
      return (
        <Link
          className="text-white font-bold border-gray-800 hover:text-indigo-800 ease-out duration-300"
          to="/"
        >
          Home
        </Link>
      );
    }
    return (
      <Link
        className="text-white font-bold border-gray-800 hover:text-indigo-800 ease-out duration-300"
        to="/dashboard"
      >
        Dashboard
      </Link>
    );
  };

  return {
    navBarShow,
    setNavBarShow,
    animationNavBar,
    handleRoute,
  };
}
export default Logic;
