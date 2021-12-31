import Order from "../../components/Order/Order";
import NotificationsHandleTables from "../../components/NotificationsHandleTables/NotificationsHandleTables";

import Logic from "./Logic";

import { BsFillBellFill } from "react-icons/bs";
import { SiAirtable } from "react-icons/si";
import { IconContext } from "react-icons";

function HandleTables() {
  const {
    data,
    handleComplete,
    waiterQuest,
    visibleComponent,
    handleVisible,
    completeQuest,
    completeBill,
    payTable,
    uncompleteOrder,
  } = Logic();

  return (
    <div className="bg-gray-800 min-h-screen">
      {visibleComponent ? (
        <div className="flex items-center w-full justify-around border-b-2 border-indigo-600 p-2 text-white shadow-item-custom mb-2">
          <h1 className="text-center font-bold text-2xl tracking-wider ">
            Notificaciones
          </h1>
          <div className="border-2 rounded-full border-indigo-600 p-2 px-3 shadow-item-custom">
            <IconContext.Provider
              value={{
                className:
                  "text-white border-indigo-600 flex items-center justify-center cursor-pointer hover:text-indigo-600 ease-out duration-300",
                size: 30,
              }}
            >
              <SiAirtable onClick={handleVisible}></SiAirtable>
            </IconContext.Provider>
            <span className="ml-6 top-8 text-white text-xl absolute border-2 rounded-full px-2 border-indigo-600 shadow-item-custom bg-gray-800">
              {data.length}
            </span>
          </div>
        </div>
      ) : (
        <div className="flex items-center w-full justify-around border-b-2 border-indigo-600 p-2 text-white shadow-item-custom mb-2">
          <h1 className="text-center font-bold text-2xl tracking-wider ">
            Mesas
          </h1>
          <div className="border-2 rounded-full border-indigo-600 p-2 px-3 shadow-item-custom">
            <IconContext.Provider
              value={{
                className:
                  "text-white border-indigo-600 flex items-center justify-center cursor-pointer hover:text-indigo-600 ease-out duration-300",
                size: 25,
              }}
            >
              <BsFillBellFill onClick={handleVisible}></BsFillBellFill>
            </IconContext.Provider>
            <span className="ml-6 top-6 text-white text-xl absolute border-2 rounded-full px-2 border-indigo-600 shadow-item-custom bg-gray-800">
              {waiterQuest.length}
            </span>
          </div>
        </div>
      )}
      {visibleComponent
        ? waiterQuest.map((request, index) => (
            <NotificationsHandleTables
              key={`${index}_${request.type_quest}`}
              notification={request}
              completeQuest={completeQuest}
              completeBill={completeBill}
            />
          ))
        : data.map((table, index) => {
            return (
              <Order
                handleComplete={handleComplete}
                payTable={payTable}
                key={table.table + index}
                title={table.table}
                data={table.data}
                uncompleteOrder={uncompleteOrder}
              />
            );
          })}
    </div>
  );
}

export default HandleTables;
