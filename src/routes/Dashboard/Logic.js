import { useState, useEffect } from "react";
import { useApi } from "../../contexts/ApiContext";

function Logic() {
  const {
    currentRestaurant,
    getApi,
    postApi,
    createFood,
    setArrayFood,
    foodModel,
    setFoodModel,
  } = useApi();
  const [quantityTables, setQuantityTables] = useState(0);
  const [show, setShow] = useState(false);
  const [method, setMethod] = useState({ method: "post" });

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
    if (method.method === "put") {
      const search_model = {
        old_model: method.editModel,
        new_model: foodModel,
      };
      await postApi(`/update_food/`, search_model);
      getApi(`/get_food/${currentRestaurant.restaurant.name}/false`).then(
        (data) => {
          setArrayFood(data);
        }
      );
      setMethod("post");
      setFoodModel({
        img: "",
        name: "",
        price: 0,
        type_food: "",
        delay: 0,
        desc: "",
        amount: 0,
      });
      return;
    }
    await createFood();
    getApi(`/get_food/${currentRestaurant.restaurant.name}/false`).then(
      (data) => {
        setArrayFood(data);
      }
    );
  };

  useEffect(() => {
    getApi(`/get_food/${currentRestaurant.restaurant.name}/false`).then(
      (data) => {
        setArrayFood(data);
      }
    );
  }, [currentRestaurant]);

  return {
    show,
    setShow,
    handleSetQuantityTables,
    quantityTables,
    handleSetterShow,
    sendAndRequest,
    setMethod,
  };
}

export default Logic;
