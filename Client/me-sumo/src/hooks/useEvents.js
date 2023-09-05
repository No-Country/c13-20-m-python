import axios from "axios";
import { API_URL_EVENTS } from "../config/api";
import { getToken } from "../redux/sliceLogin";
import { useSelector, useDispatch } from "react-redux";
import { setEvents } from "../redux/sliceEvents";

const useEvents = () => {
  const token = useSelector(getToken);
  const dispatch = useDispatch();

  const handleDataEvents = async () => {
    const URL = API_URL_EVENTS;

    try {
      const response = await axios.get(URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const { data } = response;

      dispatch(setEvents(data));

      // const allLocations = data.map((location) => location.location);
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  };

  return { handleDataEvents };
};

export default useEvents;
