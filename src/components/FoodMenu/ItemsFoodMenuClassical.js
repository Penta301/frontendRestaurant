import Cloudinary from "../../helpers/Cloudinary/Cloudinary";

const ItemsFoodMenuClassical = ({ food, handleQuest }) => {
  const { createImage } = Cloudinary();
  const { img, name, price, delay, desc } = food;
  return (
    <div className="p-2 lg:brigth_border lg:rounded-2xl lg:shadow-item-custom lg:flex lg:flex-col lg:justify-between">
      <div className="flex flex-col justify-centr items-center gap-2 justify-around">
        <h2 className="font-bold main_text tracking-wide text-xl mx-2 bottom_brigth_border">
          {name}
        </h2>{" "}
        <div className="flex items-center justify-center rounded-2xl overflow-hidden shadow-item-custom lg:max-w-sm">
          {createImage(img)}
        </div>
        <div className="flex gap-5 flex-wrap items-center">
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
        <div className="flex justify-around items-center text-center gap-5">
          <button
            className="w-full rounded-2xl text_brigth p-1 shadow-item-custom font-bold tracking-wide brigth_border"
            onClick={() =>
              handleQuest({ price: parseInt(price), name }, "less")
            }
          >
            Less
          </button>
          <button
            className="w-full rounded-2xl text_brigth p-1 shadow-item-custom font-bold tracking-wide brigth_border"
            onClick={() => handleQuest({ price: parseInt(price), name }, "add")}
          >
            More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemsFoodMenuClassical;
