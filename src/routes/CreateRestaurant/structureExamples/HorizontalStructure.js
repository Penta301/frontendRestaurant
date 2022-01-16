const HorizontalStructure = ({ food }) => {
  const { name, price, delay, desc } = food;

  return (
    <div className="p-2">
      <div className="flex gap-2 justify-around">
        <div className="w-52">
          <div className="rounded-2xl overflow-hidden shadow-item-custom brigth_border_test">
            <img
              src="https://res.cloudinary.com/dd1xsnzcm/image/upload/v1641918820/test_img_h8nezv.jpg"
              alt="test_img example"
            />
          </div>
        </div>
        <div className="flex gap-5 flex-wrap flex-col">
          <h2 className="font-bold main_text_test tracking-wide text-xl mx-2">
            {name}
          </h2>{" "}
          <p className="main_text_test font-bold tracking-wide text-lg brigth_border_test text-center p-1 rounded-full custom-smooth-shadow">
            Price: <span className="text_brigth_test">{price}$</span>
          </p>
          <p className="main_text_test text-center font-bold brigth_border_test p-2 text-sm rounded-full custom-smooth-shadow">
            Time: <span className="text_brigth_test">{delay} minutes</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-around p-2 gap-3">
        <p className="main_text_test tracking-wider text-lg">{desc}</p>
        <div className="flex justify-around items-center text-center">
          <button className="w-full rounded-l-2xl main_text_test p-1 brigth_shadow_cancel_test font-bold tracking-wide cancel_background_test">
            Less
          </button>
          <button className="w-full rounded-r-2xl p-1 main_text_test font-bold tracking-wider brigth_background_test brigth_shadow_test">
            More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HorizontalStructure;
