import FoodMenu from "./FoodMenu";
import LoadingPage from "../Loading/LoadingPage";

import { useState, useRef, useEffect, memo } from "react";
import { useApi } from "../../contexts/ApiContext";
import Query from "../../helpers/Query/Query";

export default memo(function Container() {
  const query = Query();

  const restaurant = query.get("restaurant");
  const table = query.get("number");

  const { getApi } = useApi();
  // Handle LoadingPage
  const [loading, setLoading] = useState(true);
  // Get a int of the validated tables
  const validated = useRef();
  // State to handle the colors of the application
  const colorScheme = useRef();
  // Array with the data of the DB, about the food
  const arrayFood = useRef();
  // Generate a CopyArr for the filter
  const [copyArr, setCopyArr] = useState([{}]);
  // State to send the data to the DB, when a quest is maded
  const data = useRef({
    restaurant,
    table,
    completed: false,
    payed: false,
  });
  useEffect(() => {
    getApi(`/get_food/${restaurant}/true`).then((data) => {
      arrayFood.current = data;
      setCopyArr([...data]);
      getApi(`/restaurant_color_scheme/${restaurant}`).then((data) => {
        colorScheme.current = data;
        getApi(`/authentication/table_validation/${restaurant}`).then(
          (data) => {
            validated.current = data;
            setLoading(false);
          }
        );
      });
    });
  }, [restaurant, getApi]);

  if (loading) {
    return <LoadingPage />;
  }

  if (validated.current >= table) {
    return (
      Object.keys(colorScheme.current).length && (
        <FoodMenu
          copyArr={copyArr}
          setCopyArr={setCopyArr}
          data={data.current}
          arrayFood={arrayFood.current}
          colorScheme={colorScheme.current}
        ></FoodMenu>
      )
    );
  }
  return "";
});
