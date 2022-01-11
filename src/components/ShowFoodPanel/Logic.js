import { useApi } from "../../contexts/ApiContext";
import { useEffect } from "react";
import { useModal } from "../NotificationModal/ContextModal";

const Logic = ({ setMethod, handleSetterShow, bodysArray }) => {
  const { deleteApi, currentRestaurant, setArrayFood, getFood, setFoodModel } =
    useApi();

  const { handleShowNotificationModal, setText } = useModal();

  const deleteFood = async (foodName) => {
    await deleteApi(
      `/delete_food/${currentRestaurant.restaurant.name}/${foodName}`
    );
    getFood(currentRestaurant.restaurant.name).then((data) => {
      setArrayFood(data);
    });
  };

  const handleEditFood = (food) => {
    setFoodModel({ ...food, restaurant: currentRestaurant.restaurant.name });
    handleSetterShow(true);
    setMethod({ method: "put", editModel: food });
  };

  useEffect(() => {
    const amountArr = bodysArray
      .filter(({ amount }) => amount <= 0)
      .map((item) => item.name);
    if (amountArr[0] !== "" && amountArr.length !== 0) {
      if (amountArr) {
        setText({
          title: "Te has quedado sin stock!!!",
          mainText: `Deberias rellenar el stock de: ${amountArr.toString()}`,
        });
        handleShowNotificationModal();
      }
    }
  }, [bodysArray]);

  return { deleteFood, handleEditFood };
};

export default Logic;
