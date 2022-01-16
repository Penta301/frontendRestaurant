const StructureImage = ({ food }) => {
  const { name, price, delay, desc } = food;
  return (
    <div className="p-2">
      <div className="flex flex-col justify-centr items-center gap-2 justify-around">
        <h2 className="font-bold main_text_test tracking-wide text-xl mx-2 bottom_brigth_border_test">
          {name}
        </h2>{" "}
        <div className="flex items-center justify-center rounded-2xl overflow-hidden shadow-item-custom lg:max-w-sm">
          <img
            src="https://res.cloudinary.com/dd1xsnzcm/image/upload/v1641918820/test_img_h8nezv.jpg"
            alt="test_img example"
          />
        </div>
        <div className="flex gap-5 flex-wrap items-center">
          <p className="main_text_test font-bold tracking-wide text-lg brigth_border_test text-center p-1 rounded-full custom-smooth-shadow px-2">
            Price: <span className="text_brigth_test">{price}$</span>
          </p>
          <p className="main_text_test text-center font-bold brigth_border_test p-2 text-sm rounded-full custom-smooth-shadow">
            Time: <span className="text_brigth_test">{delay} minutes</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-around p-2 gap-3">
        <p className="main_text_test tracking-wider text-lg">{desc}</p>
        <div className="flex justify-around items-center text-center gap-5">
          <button className="w-full rounded-2xl text_brigth_test p-1 shadow-item-custom font-bold tracking-wide brigth_border_test">
            Less
          </button>
          <button className="w-full rounded-2xl text_brigth_test p-1 shadow-item-custom font-bold tracking-wide brigth_border_test">
            More
          </button>
        </div>
      </div>
    </div>
  );
};

export default StructureImage;
