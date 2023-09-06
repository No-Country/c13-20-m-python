import { getToken } from "../redux/sliceLogin";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { API_URL_EVENTS } from "../config/api";
import { setEvents } from "../redux/sliceEvents";
import { setImage } from "../redux/sliceCreateEvent";

const useEvents = () => {
  const token = useSelector(getToken);
  const dispatch = useDispatch();

  const handleCreateEvent = async (newEvent) => {
    const { event_images, ...noCatEvent } = newEvent
    dispatch(setImage(event_images));
    noCatEvent.event_image = null;
    console.log('el evento que queremos ver', noCatEvent);
    try {
      const { data } = await axios.post(API_URL_EVENTS, noCatEvent, {
        headers: {
          // "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(data);
    } catch (error) {
      if (error.response) {
        alert("error!");
        console.log("Response Data:", error.response.data);
      }
    }
  };

  const handleDataEvents = async () => {
    const URL = API_URL_EVENTS;

    const promise = axios
      .get(URL)
      .then((response) => {
        const { data } = response;
        return data;
      })
      .catch((error) => {
        console.error(error.message);
        throw error;
      });

    promise.then((data) => {
      dispatch(setEvents(data));
    });

    return promise;
  };

  return { handleDataEvents, handleCreateEvent };
};

export default useEvents;
