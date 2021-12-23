import { useEffect, useState } from "react";
import { useSocket } from "../../contexts/SocketContext";
import { useApi } from "../../contexts/ApiContext";

function Logic({ data, setData, arrayFood, colorScheme }) {
  const { socket } = useSocket();
  const { createOrder, postApi } = useApi();
  const [copyArr, setCopyArr] = useState(arrayFood);

  useEffect(() => {
    const root = document.documentElement;
    const { background_color, brigth_color, cancel_color, main_text } =
      colorScheme;
    root.style.setProperty("--background_color", background_color);
    root.style.setProperty("--brigth_color", brigth_color);
    root.style.setProperty("--cancel_color", cancel_color);
    root.style.setProperty("--main_text", main_text);
  }, [colorScheme]);

  useEffect(() => {
    setCopyArr(arrayFood);
  }, [arrayFood]);

  const handleTotal = (data) => {
    const values = data.food.map((food) => {
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
      setData({ ...data, total });
      return;
    }
    setData({ ...data, total: 0 });
  };

  const handleQuest = (model, action) => {
    let item = data.food.filter((food) => food.name === model.name);
    let filteredData = data.food.filter((food) => food.name !== model.name);

    if (item.length > 0) {
      if (action === "less") {
        let newBody = {
          ...model,
          quantity: item[0].quantity - 1,
        };

        if (newBody.quantity === 0) {
          let newData = { ...data, food: [...filteredData] };

          setData(newData);
          handleTotal(newData);
          return;
        }

        let newData = { ...data, food: [...filteredData, { ...newBody }] };

        setData(newData);
        handleTotal(newData);
        return;
      }

      let newBody = {
        ...model,
        quantity: item[0].quantity + 1,
      };

      let newData = { ...data, food: [...filteredData, { ...newBody }] };

      setData(newData);
      handleTotal(newData);
    }

    if (item.length === 0) {
      if (action === "less") {
        let newData = { ...data, food: [...filteredData] };
        setData(newData);
        handleTotal(newData);
        return;
      }

      let newBody = {
        ...model,
        quantity: 1,
      };

      let newData = { ...data, food: [...filteredData, { ...newBody }] };

      setData(newData);
      handleTotal(newData);
    }
  };

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
    if (data.total !== 0) {
      const id = await createOrder(data);
      setData({ ...data, food: [], total: 0 });
      const body = { restaurant: data.restaurant };
      socket.emit("quest_table", body);
      return id;
    }
    return;
  };

  return {
    copyArr,
    setCopyArr,
    handleQuest,
    newQuest,
    call_waitres,
    getBill,
  };
}

export default Logic;
