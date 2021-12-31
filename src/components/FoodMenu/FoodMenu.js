import Logic from "./Logic";
import ContainerCard from "../questModal/ContainerCard";
import FilterFoodMenu from "../FilterFoodMenu/FilterFoodMenu";
import MessageFoodMenu from "../MessageFoodMenu/MessageFoodMenu";
import ItemsFoodMenu from "./ItemsFoodMenu";
import ItemsFoodMenuClassical from "./ItemsFoodMenuClassical";

import "./index.css";

function FoodMenu({
  data,
  setData,
  arrayFood,
  setCopyArr,
  copyArr,
  colorScheme,
}) {
  const { handleQuest, newQuest, call_waitres, getBill } = Logic({
    arrayFood,
    data,
    setData,
    colorScheme,
  });

  return (
    <div className="overflow-y-scroll h-screen background">
      <ContainerCard
        data={data}
        setData={setData}
        newQuest={newQuest}
        handleQuest={handleQuest}
      />
      <div className="my-20">
        <FilterFoodMenu
          arrayFood={arrayFood}
          setCopyArr={setCopyArr}
          colorScheme={colorScheme}
        ></FilterFoodMenu>
        {/* Is used a copy of the "arrayFood" to avoid another petition to the
        "DB" when wants to get all the items after a filter */}
        {copyArr.map((food, index) => {
          if (colorScheme.structure === "imageView") {
            return (
              <ItemsFoodMenuClassical
                food={food}
                key={index}
                handleQuest={handleQuest}
              />
            );
          }
          return (
            <ItemsFoodMenu
              key={index}
              food={food}
              index={index}
              handleQuest={handleQuest}
            ></ItemsFoodMenu>
          );
        })}
        <MessageFoodMenu
          call_waitres={call_waitres}
          colorScheme={colorScheme}
          getBill={getBill}
        ></MessageFoodMenu>
      </div>
    </div>
  );
}

export default FoodMenu;
