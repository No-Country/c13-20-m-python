import { getToken } from "../redux/sliceLogin";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { API_URL_EVENTS } from "../config/api";
import { setEvents } from "../redux/sliceEvents";

const useEvents = () => {
  const token = useSelector(getToken);
  const dispatch = useDispatch();

  const handleCreateEvent = async (newEvent) => {
    try {
      const { data } = await axios.post(API_URL_EVENTS, newEvent, {
        headers: {
          // "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(data);
    } catch (error) {
      if (error.response) {
        console.log("tkn", token);
        alert("error!");
        console.log("Response Data:", error.response.data);
      }
    }
  };

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

  return { handleDataEvents, handleCreateEvent };
};

export default useEvents;
