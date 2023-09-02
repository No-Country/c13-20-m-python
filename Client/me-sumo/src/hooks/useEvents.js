import axios from "axios";
import { API_URL_EVENTS } from "../config/api";
import { getToken } from "../redux/sliceLogin";

const useRegister = () => {
  const handleLocations = async () => {
    const URL = API_URL_EVENTS;
    const token = getToken();

    const axiosConfig = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios.get(URL, axiosConfig);
      const { data } = response;
      const allLocations = data.map((location) => location.location);
      return allLocations;
    } catch (error) {
      console.error("Error al obtener ubicaciones:", error);
      throw error;
    }
  };

  return { handleLocations };
};

export default useRegister;
