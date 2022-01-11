import { useState, useEffect } from "react";
import { useApi } from "../../contexts/ApiContext";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";

import HorizontalStructure from "./structureExamples/HorizontalStructure";
import StructureImage from "./structureExamples/ImageStructure";

function Logic() {
  const { currentRestaurant, createRestaurant, getApi, putApi } = useApi();
  const { currentUser } = useAuth();
  const [error, setError] = useState("");
  const [restaurant, setRestaurant] = useState("");
  const [tables, setTables] = useState(0);
  const [accounting, setAccounting] = useState(false);
  const [showPicker, setShowPicker] = useState({
    background_color_picker: false,
    brigth_color_picker: false,
    cancel_color_picker: false,
    main_text_picker: false,
  });
  const [colors, setColors] = useState({
    background_color: "#1b2532",
    brigth_color: "#4a51d7",
    cancel_color: "#d62328",
    main_text: "#fff",
    structure: "horizontal",
  });

  const handleStructure = (structure, props) => {
    switch (structure) {
      case "imageView":
        return <StructureImage {...props}></StructureImage>;
      default:
        return <HorizontalStructure {...props}></HorizontalStructure>;
    }
  };

  const handleShowPicker = (pickerToShow) => {
    switch (pickerToShow) {
      case "background_color_picker":
        setShowPicker({
          ...showPicker,
          background_color_picker: !showPicker.background_color_picker,
        });
        break;
      case "brigth_color_picker":
        setShowPicker({
          ...showPicker,
          brigth_color_picker: !showPicker.brigth_color_picker,
        });
        break;
      case "cancel_color_picker":
        setShowPicker({
          ...showPicker,
          cancel_color_picker: !showPicker.cancel_color_picker,
        });
        break;
      default:
        setShowPicker({
          ...showPicker,
          main_text_picker: !showPicker.main_text_picker,
        });
    }
  };

  useEffect(() => {
    const { background_color, brigth_color, cancel_color, main_text } = colors;
    const root = document.documentElement;
    root.style.setProperty("--background_test", background_color);
    root.style.setProperty("--brigth_color_test", brigth_color);
    root.style.setProperty("--cancel_color_test", cancel_color);
    root.style.setProperty("--main_text_test", main_text);
  }, [colors]);

  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const handleTables = (amount) => {
    const service = currentRestaurant.service.type_plan;
    if (amount < 0) {
      return;
    }
    if (service === "Plan 1") {
      if (amount > 20) {
        return;
      }
      setTables(amount);
      return;
    }
    setTables(amount);
    return;
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const body = {
        name: restaurant,
        color_configuration: colors,
        tables: tables,
      };
      const { data } = await createRestaurant(body);
      if (data.message === "That restaurant name exist") {
        setError(data.message);
        setLoading(false);
        return;
      }
      history.push("/");
    } catch (err) {
      setError(err);
      throw new Error(err);
    }
    setLoading(false);
  };

  const handleAccounting = () => {
    setAccounting(!accounting);
  };

  const updateRestaurant = async () => {
    try {
      setLoading(true);
      const body = {
        name: restaurant,
        color_configuration: colors,
        owner: currentUser.email,
        tables: tables,
        accounting,
      };
      await putApi(
        `/restaurant_edit/${currentRestaurant.restaurant.name}`,
        body
      );
      window.location.reload();
    } catch (err) {
      throw new Error(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (currentRestaurant.restaurant) {
      setRestaurant(currentRestaurant.restaurant.name);
      setTables(currentRestaurant.restaurant.tables);
      setAccounting(currentRestaurant.restaurant.accounting);
      getApi(
        `/restaurant_color_scheme/${currentRestaurant.restaurant.name}`
      ).then((data) => {
        setColors(data);
      });

      return;
    }
  }, []);

  return {
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
    tables,
    setTables,
    handleTables,
    accounting,
    handleAccounting,
  };
}

export default Logic;
