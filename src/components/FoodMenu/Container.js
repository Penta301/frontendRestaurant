import FoodMenu from "./FoodMenu";

import { useState, useEffect } from "react";
import { useApi } from "../../contexts/ApiContext";
import Query from "../../helpers/Query/Query";

function Container() {
  const { getFood, getApi } = useApi();
  const query = Query();

  const restaurant = query.get("restaurant");
  const table = query.get("number");

  // State to handle the colors of the application
  const [colorScheme, setColorScheme] = useState({});
  // Array with the data of the DB, about the food
  const [arrayFood, setArrayFood] = useState([{}]);
  // Generate a CopyArr for the filter
  const [copyArr, setCopyArr] = useState([{}]);
  // State to send the data to the DB, when a quest is maded
  const [data, setData] = useState({
    restaurant,
    table,
    total: 0,
    food: [],
    completed: false,
    payed: false,
  });
  useEffect(() => {
    getFood(restaurant).then((data) => {
      setArrayFood([...data]);
      setCopyArr([...data]);
    });
    getApi(`/restaurant_color_scheme/${restaurant}`).then((data) => {
      setColorScheme(data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FoodMenu
      copyArr={copyArr}
      setCopyArr={setCopyArr}
      data={data}
      setData={setData}
      arrayFood={arrayFood}
      colorScheme={colorScheme}
    ></FoodMenu>
  );
}
export default Container;
