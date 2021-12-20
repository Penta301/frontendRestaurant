import { useState } from "react";

function Logic({ maxQuantity }) {
  const [quantity, setQuantity] = useState(0);
  const [params, setParams] = useState([]);

  const handleQuantity = (action = false) => {
    if (action === "more") {
      if (quantity >= maxQuantity) {
        return;
      }
      setQuantity(quantity + 1);
      return;
    }
    if (quantity >= 1) {
      setQuantity(quantity - 1);
      return;
    }
    setQuantity(0);
    return;
  };

  const createLinks = (quantity) => {
    const params = [];

    for (let i = 1; i <= quantity; i++) {
      let param = { name: i };

      params.push(param);
    }

    setParams(params);
  };

  return {
    quantity,
    setQuantity,
    createLinks,
    handleQuantity,
    params,
    setParams,
  };
}

export default Logic;
