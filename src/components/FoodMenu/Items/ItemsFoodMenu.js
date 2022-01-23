import { useEffect } from "react";
import Cloudinary from "../../../helpers/Cloudinary/Cloudinary";

export default function ItemsFoodMenu({
  img,
  name,
  price,
  delay,
  desc,
  handleQuest,
}) {
  const { createImage } = Cloudinary();

  useEffect(() => console.log("ItemFoodMenu"));

  return (
    <div className="p-2 lg:flex lg:flex-col lg:justify-between">
      <div className="flex gap-2 justify-around">
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
            Precio: <span className="text_brigth">{price}$</span>
          </p>
          <p className="main_text text-center font-bold brigth_border p-2 text-sm rounded-full custom-smooth-shadow">
            Demora: <span className="text_brigth">{delay} minutos</span>
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
            Quitar
          </button>
          <button
            className="w-full rounded-r-2xl p-1 main_text font-bold tracking-wider brigth_background brigth_shadow"
            onClick={() => handleQuest({ price: parseInt(price), name }, "add")}
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
}
