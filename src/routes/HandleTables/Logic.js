import { useEffect, useState } from "react";
import { useSocket } from "../../contexts/SocketContext";
import { useApi } from "../../contexts/ApiContext";

function Logic() {
  const { socket } = useSocket();
  const { currentRestaurant, getOrder, completeOrder, getApi, postApi } =
    useApi();
  const [visibleComponent, setVisibleComponent] = useState(false);
  const [data, setData] = useState([]);
  const [waiterQuest, setWaiterQuest] = useState([]);

  const handleVisible = () => {
    setVisibleComponent(!visibleComponent);
  };

  const handleQuest = async (restaurant) => {
    const newQuest = await getApi(`quest_tables/get_quest/${restaurant}`);
    setWaiterQuest(newQuest);
  };

  const handleData = async (data) => {
    const newOrder = await getOrder(data);
    // Function to save the tables of the arr
    const sortData = (arrOfOrders) => {
      // Array for save the sorted data
      const sortedArr = [];
      // Arry for crate the set of the tables
      const arrTables = [];
      // Get the tables from the orders
      arrOfOrders.forEach((order) => {
        const { table } = order;
        arrTables.push(table);
      });
      // Build a set of the tables
      const setTables = new Set(arrTables);
      // Iterates over the set
      setTables.forEach((table) => {
        // Filter the orders with the tables
        const data = arrOfOrders.filter((order) => order.table === table);
        // Generate the table object
        const tableObject = { table, data };
        // Insert the table object once is sorted, inside the sortedArr
        sortedArr.push(tableObject);
      });
      // Return the sortedArr
      return sortedArr;
    };
    const sortedData = sortData(newOrder);
    setData([...sortedData]);
  };

  const handleComplete = async (id, body) => {
    await completeOrder(id, body);
    handleData(currentRestaurant.restaurant.name);
  };

  const uncompleteOrder = async (body, id) => {
    await postApi(`orders/uncomplete_order/${id}`, body);
    handleData(currentRestaurant.restaurant.name);
  };

  const payTable = async (body) => {
    await postApi("orders/pay_table/", body);
    handleData(currentRestaurant.restaurant.name);
  };

  const completeQuest = async (body) => {
    await postApi("quest_tables/complete_quest/", body);
    handleQuest(currentRestaurant.restaurant.name);
  };

  const completeBill = async (body) => {
    await postApi("quest_tables/complete_bill/", body);
    handleQuest(currentRestaurant.restaurant.name);
    handleData(currentRestaurant.restaurant.name);
  };

  useEffect(() => {
    handleData(currentRestaurant.restaurant.name);
    handleQuest(currentRestaurant.restaurant.name);
    if (!socket.connected) {
      socket.connect();
    }
    socket.emit("connect_tables_restaurant", currentRestaurant.restaurant.name);
    socket.on("new_quest", (data) => {
      handleData(data);
    });
    socket.on("call_waitres", (data) => {
      handleQuest(data);
    });

    return () => socket.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket, currentRestaurant]);

  return {
    data,
    handleComplete,
    waiterQuest,
    visibleComponent,
    handleVisible,
    completeQuest,
    completeBill,
    payTable,
    uncompleteOrder,
  };
}

export default Logic;
