import { useApi } from "../../contexts/ApiContext";
import CloudinaryWidget from "../../helpers/Cloudinary/Cloudinary";

import { BsCheck2 } from "react-icons/bs";
import { ImFilePicture } from "react-icons/im";
import { IconContext } from "react-icons";

function CreateFoodPanel({ sendAndRequest }) {
  const { foodModel, setFoodModel } = useApi();
  const { imageGeneration, createImage } = CloudinaryWidget();

  return (
    <div className="flex p-4 items-start gap-5 flex-col">
      <div className="flex justify-between w-full lg:justify-start lg:gap-10">
        <div
          className="w-52 cursor-pointer"
          onClick={() => imageGeneration(setFoodModel, foodModel)}
        >
          {foodModel.img ? (
            <div className="rounded-2xl  overflow-hidden shadow-item-custom border-2 border-indigo-600">
              {createImage(foodModel.img)}
            </div>
          ) : (
            <div className="w-full h-full flex justify-center items-center rounded-2xl overflow-hidden shadow-item-custom border-2 hover:text-indigo-600 ease-out duration-300">
              <IconContext.Provider
                value={{
                  className: "text-white ",
                  size: 30,
                }}
              >
                <ImFilePicture />
              </IconContext.Provider>
            </div>
          )}
        </div>
        <div
          className="flex flex-col my-2 gap-5 text-white
          w-7/12 lg:w-6/12 px-10"
        >
          <input
            type="text"
            className="bg-transparent border-b-2 border-indigo-600 outline-none lg:w-full lg:text-xl"
            placeholder="Title of the food"
            value={foodModel.name}
            onChange={(e) => {
              setFoodModel({
                ...foodModel,
                name: e.currentTarget.value,
              });
            }}
          />
          <div className="flex border-b-2 border-indigo-600 w-full lg:justify-between">
            <label
              className="text-gray-400 w-40 font-bold tracking-wide text-xl lg:w-full"
              htmlFor="price"
            >
              Price:
            </label>
            <input
              type="number"
              id="price"
              className="bg-transparent  outline-none lg:text-xl w-full"
              value={foodModel.price}
              onChange={(e) =>
                setFoodModel({
                  ...foodModel,
                  price: parseInt(e.currentTarget.value),
                })
              }
            />
          </div>
          <input
            type="text"
            className="bg-transparent border-b-2 border-indigo-600 outline-none lg:w-full lg:text-xl"
            placeholder="Category"
            value={foodModel.type_food}
            onChange={(e) => {
              setFoodModel({
                ...foodModel,
                type_food: e.currentTarget.value,
              });
            }}
          />
        </div>
      </div>
      <div className="flex justify-between gap-5 lg:w-full lg:justify-start lg:gap-10">
        <textarea
          className="resize-none rounded-2xl shadow-item-custom border-2 border-indigo-600 bg-gray-200 p-2 outline-none h-40 w-5/12 lg:w-3/12"
          maxLength="200"
          placeholder="Description of the food"
          onChange={(e) =>
            setFoodModel({
              ...foodModel,
              desc: e.currentTarget.value,
            })
          }
          value={foodModel.desc}
        ></textarea>
        <div className="flex flex-col my-2 gap-5 text-white lg:w-6/12">
          <div className="flex border-b-2 border-indigo-600 w-full justify-between">
            <label
              className="text-gray-400 font-bold tracking-wide text-xl lg:w-full"
              htmlFor="amount"
            >
              Amount:
            </label>
            <input
              id="amount"
              type="number"
              className="bg-transparent  outline-none w-16 lg:text-xl"
              value={foodModel.amount}
              onChange={(e) =>
                setFoodModel({
                  ...foodModel,
                  amount: parseInt(e.currentTarget.value),
                })
              }
            />
          </div>
          <div className="flex border-b-2 border-indigo-600 w-full justify-between gap-20">
            <label
              className="text-gray-400 font-bold tracking-wide text-xlw-full"
              htmlFor="delay"
            >
              Delay:
            </label>
            <input
              id="delay"
              type="number"
              className="bg-transparent outline-none w-16 lg:text-xl"
              value={foodModel.delay}
              onChange={(e) =>
                setFoodModel({
                  ...foodModel,
                  delay: parseInt(e.currentTarget.value),
                })
              }
            />
          </div>

          <div
            onClick={sendAndRequest}
            className="p-4 w-20 self-center rounded-md border-2 border-indigo-600 hover:bg-indigo-800 transition ease-out duration-300 flex items-center justify-center lg:w-full"
          >
            <IconContext.Provider
              value={{
                className: "hover:text-indigo-500 ease-out duration-300",
                size: 30,
              }}
            >
              <BsCheck2></BsCheck2>
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateFoodPanel;
