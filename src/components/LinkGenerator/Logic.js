import { useEffect, useState } from "react";
import { useApi } from "../../contexts/ApiContext";

function Logic() {
  const { currentRestaurant } = useApi();

  const [quantity, setQuantity] = useState(currentRestaurant.restaurant.tables);
  const [params, setParams] = useState([]);

  const createLinks = (quantity) => {
    const params = [];

    for (let i = 1; i <= quantity; i++) {
      let param = { name: i };

      params.push(param);
    }

    setParams(params);
  };

  useEffect(() => {
    createLinks(quantity);
  }, [quantity]);

  return {
    quantity,
    setQuantity,
    createLinks,
    params,
    setParams,
  };
}

export default Logic;
