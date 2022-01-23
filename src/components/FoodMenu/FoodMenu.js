import React, { useEffect, useMemo, memo } from "react";
import ContainerCard from "./questModal/ContainerCard";
import FilterFoodMenu from "./FilterFoodMenu/FilterFoodMenu";
import MessageFoodMenu from "./MessageFoodMenu/MessageFoodMenu";
import LoadingPage from "../Loading/LoadingPage";
import Logic from "./Logic";

import "./index.css";

const ItemsFoodMenu = React.lazy(() => import("./Items/ItemsFoodMenu"));
const ItemsFoodMenuClassical = React.lazy(() =>
  import("./Items/ItemsFoodMenuClassical")
);

export default memo(function FoodMenu({
  data,
  arrayFood,
  setCopyArr,
  copyArr,
  colorScheme,
}) {
  useEffect(() => console.log("Total: ", total, food));
  const { total, newQuest, handleQuest, getBill, call_waitres, food } = Logic({
    data,
    colorScheme,
  });

  return (
    <React.Suspense fallback={<LoadingPage />}>
      <div className="overflow-y-scroll h-screen background">
        <ContainerCard
          table={data.table}
          total={total}
          newQuest={newQuest}
          handleQuest={handleQuest}
          food={food}
        />
        <div className="my-20">
          <FilterFoodMenu
            arrayFood={arrayFood}
            setCopyArr={setCopyArr}
            colorScheme={colorScheme}
          ></FilterFoodMenu>
          {/* Is used a copy of the "arrayFood" to avoid another petition to the
        "DB" when wants to get all the items after a filter */}
          {useMemo(
            () => (
              <div className="lg:flex lg:flex-wrap lg:items-stretch lg:justify-center lg:gap-5 lg:p-4">
                {copyArr.map((food, index) => {
                  const { img, name, price, delay, desc } = food;
                  if (colorScheme.structure === "imageView") {
                    return (
                      <div>
                        <ItemsFoodMenuClassical
                          img={img}
                          name={name}
                          price={price}
                          delay={delay}
                          desc={desc}
                          key={index}
                          handleQuest={handleQuest}
                        />
                      </div>
                    );
                  }
                  return (
                    <ItemsFoodMenu
                      key={index}
                      img={img}
                      name={name}
                      price={price}
                      delay={delay}
                      desc={desc}
                      index={index}
                      handleQuest={handleQuest}
                    ></ItemsFoodMenu>
                  );
                })}
              </div>
            ),
            [handleQuest, copyArr, colorScheme.structure]
          )}
          <MessageFoodMenu
            call_waitres={call_waitres}
            getBill={getBill}
            colorScheme={colorScheme}
          ></MessageFoodMenu>
        </div>
      </div>
    </React.Suspense>
  );
});
