import { useState } from "react";

function Logic() {
  const [filter, setFilter] = useState(false);
  const [completeds, setCompleteds] = useState(false);
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  const filterCompleteds = (completeds, data) => {
    const filteredData = data.filter((quest) => quest.completed === completeds);
    return filteredData;
  };

  const handleFilter = () => {
    setFilter(!filter);
  };

  const calculateCount = (arr) => {
    const newArr = [];
    arr.forEach((item) => newArr.push(item.total));
    const reducedArr = newArr.reduce((a, b) => a + b);
    return reducedArr;
  };
  return {
    calculateCount,
    handleFilter,
    completeds,
    filterCompleteds,
    setCompleteds,
    handleShow,
    show,
  };
}

export default Logic;
