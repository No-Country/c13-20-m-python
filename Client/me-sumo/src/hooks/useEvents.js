import { getToken } from "../redux/sliceLogin";
import { useSelector } from "react-redux";
import axios from "axios";
import { API_URL_EVENTS } from "../config/api";

const useEvents = () => {
  const token = useSelector(getToken);

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

  const handleEventsLocations = async () => {
    const URL = API_URL_EVENTS;

    try {
      const response = await axios.get(URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const { data } = response;

      console.log(response);

      const allLocations = data.map((location) => location.location);

      return allLocations;
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  };

  return { handleEventsLocations, handleCreateEvent };
};

export default useEvents;
