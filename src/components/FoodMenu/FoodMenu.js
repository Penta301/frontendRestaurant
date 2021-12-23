import Logic from "./Logic";
import Cloudinary from "../../helpers/Cloudinary/Cloudinary";
import ContainerCard from "../questModal/ContainerCard";
import FilterFoodMenu from "../FilterFoodMenu/FilterFoodMenu";
import MessageFoodMenu from "../MessageFoodMenu/MessageFoodMenu";

import "./index.css";

function FoodMenu({
  data,
  setData,
  arrayFood,
  setCopyArr,
  copyArr,
  colorScheme,
}) {
  const { createImage } = Cloudinary();
  const { handleQuest, newQuest, call_waitres, getBill } = Logic({
    arrayFood,
    data,
    setData,
    colorScheme,
  });

  return (
    <div className="overflow-y-scroll h-screen background">
      <ContainerCard data={data} setData={setData} newQuest={newQuest} />
      <div className="my-20">
        <FilterFoodMenu
          arrayFood={arrayFood}
          setCopyArr={setCopyArr}
          colorScheme={colorScheme}
        ></FilterFoodMenu>
        {/* Is used a copy of the "arrayFood" to avoid another petition to the
        "DB" when wants to get all the items after a filter */}
        {copyArr.map((food, index) => {
          const { img, name, price, delay, desc } = food;
          return (
            <div className="p-2" key={index}>
              <div className="flex gap-2 justify-around ">
                <div className="w-52">
                  <div className="rounded-2xl overflow-hidden shadow-item-custom brigth_border">
                    {createImage(img)}
                  </div>
                </div>
                <div className="flex gap-5 flex-wrap flex-col">
                  <h2 className="font-bold main_text tracking-wide text-xl mx-2">
                    {name}
                  </h2>{" "}
                  <p className="main_text font-bold tracking-wide text-lg brigth_border text-center p-1 rounded-full custom-smooth-shadow">
                    Price: <span className="text_brigth">{price}$</span>
                  </p>
                  <p className="main_text text-center font-bold brigth_border p-2 text-sm rounded-full custom-smooth-shadow">
                    Time: <span className="text_brigth">{delay} minutes</span>
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-around p-2 gap-3">
                <p className="main_text tracking-wider text-lg">{desc}</p>
                <div className="flex justify-around items-center text-center">
                  <button
                    className="w-full rounded-l-2xl main_text p-1 brigth_shadow_cancel font-bold tracking-wide cancel_background"
                    onClick={() =>
                      handleQuest({ price: parseInt(price), name }, "less")
                    }
                  >
                    Less
                  </button>
                  <button
                    className="w-full rounded-r-2xl p-1 main_text font-bold tracking-wider brigth_background brigth_shadow"
                    onClick={() =>
                      handleQuest({ price: parseInt(price), name }, "add")
                    }
                  >
                    More
                  </button>
                </div>
              </div>
            </div>
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
