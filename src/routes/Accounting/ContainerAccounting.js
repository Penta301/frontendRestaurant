import { useEffect, useState } from "react";
import { useApi } from "../../contexts/ApiContext";

import LoadingPage from "../../components/Loading/LoadingPage";
import Accounting from "./Accounting";

const Container = () => {
  const { getApi, currentRestaurant } = useApi();

  const [data, setData] = useState();

  useEffect(() => {
    getApi(`/accounting/${currentRestaurant.restaurant.name}`)
      .then((data) => setData(data))
      .catch((error) => new Error(error));
  }, []);

  return <>{data ? <Accounting data={data}></Accounting> : <LoadingPage />}</>;
};

export default Container;
