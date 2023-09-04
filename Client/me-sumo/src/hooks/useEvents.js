import axios from "axios";
import { API_URL_EVENTS } from "../config/api";
import { getToken } from "../redux/sliceLogin";
import { useSelector } from "react-redux";

const useLocations = () => {
  const token = useSelector(getToken);

  const handleEventsLocations = async () => {
    const URL = API_URL_EVENTS;

    try {
      const response = await axios.get(URL, {
        headers: {
          jwt: token,
          withCredentials: true,
        },
      });
      const { data } = response;
      const allLocations = data.map((location) => location.location);
      console.log(allLocations);
      return allLocations;
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  };

  return { handleEventsLocations };
};

export default useLocations;
