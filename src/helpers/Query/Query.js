import { useLocation } from "react-router-dom";

function Query() {
  const useQuery = () => new URLSearchParams(useLocation().search);
  let query = useQuery();

  return query;
}

export default Query;
