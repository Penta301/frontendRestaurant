import { useApi } from "../../contexts/ApiContext";

const Logic = () => {
  const { deleteApi, currentRestaurant, setArrayFood, getFood } = useApi();

  const deleteFood = async (foodName) => {
    await deleteApi(
      `/delete_food/${currentRestaurant.restaurant.name}/${foodName}`
    );
    getFood(currentRestaurant.restaurant.name).then((data) => {
      setArrayFood(data);
    });
  };

  return { deleteFood };
};

export default Logic;
