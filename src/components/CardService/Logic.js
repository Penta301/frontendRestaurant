import { useApi } from "../../contexts/ApiContext";

function Logic() {
  const { payService } = useApi();

  const handleService = async (body) => {
    await payService(body);
    window.location.reload();
  };

  return {
    handleService,
  };
}
export default Logic;
