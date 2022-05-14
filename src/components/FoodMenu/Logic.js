import { useEffect, useState } from "react";
import { useSocket } from "../../contexts/SocketContext";
import { useApi } from "../../contexts/ApiContext";

function Logic({ data, colorScheme }) {
  // Socket
  const { socket } = useSocket();
  // Orders
  const { createOrder, postApi } = useApi();
  const [food, setFood] = useState([]);
  const [total, setTotal] = useState(0);
  //ColorScheme
  const root = document.documentElement;
  const { background_color, brigth_color, cancel_color, main_text } =
    colorScheme;
  root.style.setProperty("--background_color", background_color);
  root.style.setProperty("--brigth_color", brigth_color);
  root.style.setProperty("--cancel_color", cancel_color);
  root.style.setProperty("--main_text", main_text);

  //Orders
  const handleTotal = (food) => {
    const values = food.map((food) => {
      const { price, quantity } = food;
      if (quantity < 1) {
        const total = price;
        return total;
      }
      const total = price * quantity;
      return total;
    });

    if (values.length !== 0) {
      const total = values.reduce((a, b) => a + b);
      setTotal(total);
      return;
    }
    setTotal(0);
  };

  const handleQuest = (model, action) => {
    let item = food.filter((food) => food.name === model.name);
    let filteredData = food.filter((food) => food.name !== model.name);


    if (item.length > 0) {
      if (action === "less") {
        let newBody = {
          ...model,
          quantity: item[0].quantity - 1,
        };

        if (newBody.quantity === 0) {
          setFood(filteredData);
          handleTotal(filteredData);
          return;
        }

        let newData = [...filteredData, newBody];

        setFood(newData);
        handleTotal(newData);
        return;
      }

      let newBody = {
        ...model,
        quantity: item[0].quantity + 1,
      };

      let newData = [...filteredData, newBody];

      setFood(newData);
      handleTotal(newData);
    }

    if (item.length === 0) {
      if (action === "less") {
        setFood(filteredData);
        handleTotal(filteredData);
        return;
      }

      let newBody = {
        ...model,
        quantity: 1,
      };

      let newData = [...filteredData, newBody];

      setFood(newData);
      handleTotal(newData);
    }
  };

  //Sockets

  useEffect(() => {
    socket.emit("connect_tables_restaurant", data.restaurant);
    return () => socket.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket]);

  const call_waitres = async () => {
    const body = {
      restaurant: data.restaurant,
      table: data.table,
      completed: false,
      type_quest: "call_waitres",
    };
    await postApi("quest_tables/new_quest/", body);
    socket.emit("call_waitres", body);
  };

  const getBill = async () => {
    const body = {
      restaurant: data.restaurant,
      table: data.table,
      completed: false,
      type_quest: "get_bill",
    };
    await postApi("quest_tables/new_quest/", body);
    socket.emit("call_waitres", body);
  };

  const newQuest = async () => {
    if (total !== 0) {
      const dataOrder = { ...data, food, total };
      const id = await createOrder(dataOrder);
      setFood([{}]);
      setTotal(0);
      const body = { restaurant: data.restaurant };
      socket.emit("quest_table", body);
      return id;
    }
    return;
  };

  return {
    handleQuest,
    newQuest,
    call_waitres,
    getBill,
    total,
    food,
  };
}

export default Logic;
