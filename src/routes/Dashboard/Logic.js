import { useState, useEffect } from "react";
import { useApi } from "../../contexts/ApiContext";

function Logic() {
  const { currentRestaurant, getFood, createFood, setArrayFood } = useApi();
  const [quantityTables, setQuantityTables] = useState(0);
  const [show, setShow] = useState(false);

  const handleSetterShow = () => {
    setShow(!show);
  };

  const handleSetQuantityTables = (quantityTables) => {
    if (currentRestaurant.service.title === "plan1") {
      if (quantityTables > 5) {
        setQuantityTables(5);
        return;
      }
      setQuantityTables(quantityTables);
      return;
    }
    setQuantityTables(quantityTables);
  };

  const sendAndRequest = async () => {
    await createFood();
    getFood(currentRestaurant.restaurant.name).then((data) => {
      setArrayFood([...data]);
    });
  };

  useEffect(() => {
    getFood(currentRestaurant.restaurant.name).then((data) => {
      setArrayFood(data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentRestaurant]);

  return {
    show,
    setShow,
    handleSetQuantityTables,
    quantityTables,
    handleSetterShow,
    sendAndRequest,
  };
}

export default Logic;
