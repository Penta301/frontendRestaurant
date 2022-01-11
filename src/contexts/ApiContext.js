import LoadingPage from "../components/Loading/LoadingPage";
import React, { useContext, useEffect, useState, useMemo } from "react";
import axios from "axios";

import { useAuth } from "./AuthContext";

const ApiContext = React.createContext();

export function useApi() {
  return useContext(ApiContext);
}

export function ApiProvider({ children }) {
  const { currentUser } = useAuth();

  const api = useMemo(() => {
    return axios.create({
      baseURL: "http://127.0.0.1:8000/api",
    });
  }, []);

  const [currentRestaurant, setCurrentRestaurant] = useState({
    service: false,
    restaurant: false,
  });

  const [restaurant, setRestaurant] = useState({
    owner: "",
    name: "",
    tables: 0,
  });

  const [apiError, setError] = useState("");
  const [arrayFood, setArrayFood] = useState([
    {
      img: "",
      type_food: "",
      name: "",
      price: 0,
      amount: 0,
      delay: 0,
      desc: "",
    },
  ]);

  const [foodModel, setFoodModel] = useState({
    img: "",
    name: "",
    price: 0,
    type_food: "",
    delay: 0,
    desc: "",
    amount: 0,
  });

  const [loading, setLoading] = useState(true);

  const createFood = async () => {
    const newBody = {
      ...foodModel,
      restaurant: currentRestaurant.restaurant.name,
    };

    try {
      await api.post("/create_food/", newBody);
      setFoodModel({
        img: "",
        name: "",
        type_food: "",
        price: 0,
        amount: 0,
        delay: 0,
        desc: "",
      });
    } catch (error) {
      new Error(error);
      throw Error;
    }
  };

  const verifyRestaurant = async () => {
    try {
      const { data } = await api.post(
        `authentication/verify_restaurant/${currentUser.email}`
      );
      setCurrentRestaurant(data);
      setLoading(false);
    } catch {
      setLoading(false);
      setCurrentRestaurant({});
      setError("Create a Restaurant");
    }
  };

  const createRestaurant = async (body) => {
    const newBody = { ...body, owner: currentUser.email };

    try {
      const data = await api.post("/restaurant_create/", newBody);
      if (data.data.message === "The restaurant was created") {
        verifyRestaurant();
        return data;
      }
      return data;
    } catch {
      setCurrentRestaurant({});
      setError("Failed creating the restaurant");
    }
  };

  const payService = async (body) => {
    const newBody = { ...body, owner: currentUser.email };
    console.log(newBody);

    try {
      const { data } = await api.post("/service/pay_service/", newBody);
      return data;
    } catch {
      setError("Something went wrong");
    }
  };

  const createOrder = async (body) => {
    try {
      const { data } = await api.post("orders/create_order/", body);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const getOrder = async (restaurant) => {
    try {
      const { data } = await api.get(`/orders/get_order/${restaurant}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const completeOrder = async (idOrder, body) => {
    try {
      const { data } = await api.post(
        `/orders/complete_order/${idOrder}`,
        body
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const getApi = async (endPoint) => {
    try {
      const { data } = await api.get(endPoint);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const postApi = async (endPoint, body) => {
    try {
      const { data } = await api.post(endPoint, body);
      return data;
    } catch (error) {
      new Error(error);
      throw Error;
    }
  };

  const deleteApi = async (endPoint, body) => {
    try {
      const { data } = await api.delete(endPoint, body);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const putApi = async (endPoint, body) => {
    try {
      const { data } = await api.put(endPoint, body);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    verifyRestaurant();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  const value = {
    api,
    arrayFood,
    setArrayFood,
    createFood,
    apiError,
    currentRestaurant,
    createRestaurant,
    payService,
    restaurant,
    setRestaurant,
    foodModel,
    setFoodModel,
    createOrder,
    getOrder,
    completeOrder,
    getApi,
    postApi,
    deleteApi,
    putApi,
    verifyRestaurant,
  };

  return (
    <ApiContext.Provider value={value}>
      {loading ? <LoadingPage /> : children}
    </ApiContext.Provider>
  );
}
