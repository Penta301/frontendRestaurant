import Logic from "./Logic";
import { useApi } from "../../contexts/ApiContext";
import HeaderNavBar from "../../components/headerNavBar/HeaderNavBar";

import "./index.css";

import { ChromePicker } from "react-color";

function CreateRestaurant() {
  const {
    restaurant,
    setRestaurant,
    handleSubmit,
    loading,
    colors,
    setColors,
    showPicker,
    handleShowPicker,
    updateRestaurant,
    error,
    handleStructure,
  } = Logic();

  const { currentRestaurant } = useApi();

  return (
    <>
      <HeaderNavBar></HeaderNavBar>
      <div className="flex justify-center items-center">
        <div className="flex flex-col items-center h-4/5 brigth_border_test py-4 gap-5 p-4 shadow-item-custom rounded-xl background_test">
          <h1 className="font-bold text-2xl main_text_test">
            Create Restaurant
          </h1>
          {error && (
            <p className="text-red-600 border-2 rounded-2xl p-2 shadow-item-custom font-bold tracking-wide">
              {error}
            </p>
          )}
          <div>
            <div className="flex flex-col gap-3 items-center">
              <input
                type="text"
                className="outline-none background_test p-2 rounded-xl main_text_test brigth_border_test shadow-item-custom"
                value={restaurant}
                placeholder="Insert Restaurant Name"
                onChange={(e) => setRestaurant(e.currentTarget.value)}
              />
              {showPicker.background_color_picker ? (
                <div className="flex flex-col justify-center items-center gap-2 ">
                  <ChromePicker
                    color={colors.background_color}
                    onChange={(e) =>
                      setColors({ ...colors, background_color: e.hex })
                    }
                  ></ChromePicker>
                  <button
                    className="brigth_border_test main_text_test rounded-2xl p-2 shadow-item-custom"
                    onClick={() => handleShowPicker("background_color_picker")}
                  >
                    Confirmar
                  </button>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2">
                  <h2 className="bottom_brigth_border_test tracking-wide main_text_test">
                    Elige el color del fondo de tu carta
                  </h2>
                  <div
                    className="w-10 h-10 brigth_border_test rounded-full p-4 cursor-pointer shadow-item-custom"
                    style={{ backgroundColor: colors.background_color }}
                    onClick={() => handleShowPicker("background_color_picker")}
                  ></div>
                </div>
              )}
              {showPicker.brigth_color_picker ? (
                <div className="flex flex-col justify-around items-center gap-2 w-full">
                  <ChromePicker
                    color={colors.brigth_color}
                    onChange={(e) =>
                      setColors({ ...colors, brigth_color: e.hex })
                    }
                  ></ChromePicker>
                  <button
                    className="brigth_border_test main_text_test rounded-2xl p-2 shadow-item-custom"
                    onClick={() => handleShowPicker("brigth_color_picker")}
                  >
                    Confirmar
                  </button>
                </div>
              ) : (
                <div className="flex items-center justify-around gap-2 w-full">
                  <h2 className="bottom_brigth_border_test tracking-wide text_brigth_test">
                    Elige tu color llamativo
                  </h2>
                  <div
                    className="w-10 h-10 brigth_border_test rounded-full p-4 cursor-pointer shadow-item-custom"
                    style={{ backgroundColor: colors.brigth_color }}
                    onClick={() => handleShowPicker("brigth_color_picker")}
                  ></div>
                </div>
              )}
              {showPicker.main_text_picker ? (
                <div className="flex flex-col justify-center items-center gap-2 ">
                  <ChromePicker
                    color={colors.main_text}
                    onChange={(e) => setColors({ ...colors, main_text: e.hex })}
                  ></ChromePicker>
                  <button
                    className="brigth_border_test main_text_test rounded-2xl p-2 shadow-item-custom"
                    onClick={() => handleShowPicker("main_text_picker")}
                  >
                    Confirmar
                  </button>
                </div>
              ) : (
                <div className="flex items-center justify-around gap-2 w-full">
                  <h2 className="bottom_brigth_border_test tracking-wide main_text_test">
                    Elige el color de tu texto
                  </h2>
                  <div
                    className="w-10 h-10 brigth_border_test rounded-full p-4 cursor-pointer shadow-item-custom"
                    style={{ backgroundColor: colors.main_text }}
                    onClick={() => handleShowPicker("main_text_picker")}
                  ></div>
                </div>
              )}
              {showPicker.cancel_color_picker ? (
                <div className="flex flex-col justify-center items-center gap-2 ">
                  <ChromePicker
                    color={colors.cancel_color}
                    onChange={(e) =>
                      setColors({ ...colors, cancel_color: e.hex })
                    }
                  ></ChromePicker>
                  <button
                    className="brigth_border_test main_text_test rounded-2xl p-2 shadow-item-custom"
                    onClick={() => handleShowPicker("cancel_color_picker")}
                  >
                    Confirmar
                  </button>
                </div>
              ) : (
                <div className="flex items-center justify-around gap-2 w-full">
                  <h2 className="rounded-full cancel_background_test p-2  tracking-wide main_text_test shadow-item-custom">
                    Elige tu color para cancelar
                  </h2>
                  <div
                    className="w-10 h-10 brigth_border_test rounded-full p-4 cursor-pointer shadow-item-custom"
                    style={{ backgroundColor: colors.cancel_color }}
                    onClick={() => handleShowPicker("cancel_color_picker")}
                  ></div>
                </div>
              )}
              <div>
                <h2 className="bottom_brigth_border_test tracking-wide main_text_test">
                  Elige la estructura de tu carta
                </h2>
                <div className="w-full flex justify-center items-center gap-5 py-2">
                  <button
                    className="p-2 rounded-2xl brigth_border_test shadow-item-custom main_text_test"
                    onClick={() =>
                      setColors({ ...colors, structure: "horizontal" })
                    }
                  >
                    Horizontal
                  </button>
                  <button
                    className="p-2 rounded-2xl brigth_border_test shadow-item-custom main_text_test"
                    onClick={() =>
                      setColors({ ...colors, structure: "imageView" })
                    }
                  >
                    Imagen
                  </button>
                </div>
                {handleStructure(colors.structure, {
                  food: {
                    img: "test_img",
                    name: "Pancakes",
                    price: 250,
                    delay: 20,
                    desc: "Los mejores pancakes del mundo, con un magico sabor a miel",
                  },
                  handleQuest: null,
                })}
              </div>
              {currentRestaurant.restaurant ? (
                <button
                  type="submit"
                  className="cursor-pointer background_test p-2 rounded-xl uppercase font-bold main_text_test brigth_border_test"
                  disabled={loading}
                  onClick={updateRestaurant}
                >
                  Edit
                </button>
              ) : (
                <button
                  type="submit"
                  className="cursor-pointer background_test p-2 rounded-xl uppercase font-bold main_text_test brigth_border_test"
                  disabled={loading}
                  onClick={handleSubmit}
                >
                  Create
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateRestaurant;
