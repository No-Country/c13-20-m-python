import { getToken } from "../redux/sliceLogin";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL_EVENTS } from "../config/api";
import { setEvents } from "../redux/sliceEvents";
import { setCategories, setEvent } from "../redux/sliceCreateEvent";

// Función para mezclar aleatoriamente un array.
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
const useEvents = () => {
  const token = useSelector(getToken);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const redirectStep2 = (navigate) => {
    navigate("/create-event-step2");
  };
  const redirectStep3 = (navigate) => {
    navigate("/create-event-step3");
  };
  const handleCreateEvent = async (newEvent) => {
    const { categories, event_images, ...noCatEvent } = newEvent;
    dispatch(setCategories(categories));
    noCatEvent.event_images = event_images[0];

    try {
      const { data } = await axios.post(API_URL_EVENTS, noCatEvent, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(setEvent(data.event));
      redirectStep2(navigate);
    } catch (error) {
      if (error.response) {
        alert("error!");
        console.log("Response Data:", error.response.data);
      }
    }
  };

  const handleCategory = async (category, id) => {
    const modifyCategory = { categories: category };
    try {
      await axios.patch(API_URL_EVENTS + `${id}/`, modifyCategory, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigate("/home");
    } catch (error) {
      if (error.response) {
        // Manejo de error si se recibe una respuesta del servidor.
        alert("¡Error al crear el evento!");
        console.log("Response Data:", error.response.data);
      }
    }
  };

  const handleTicket = async (ticket, id) => {
    try {
      console.log(id);
      console.log(ticket);
      await axios.patch(API_URL_EVENTS + `${id}/`, ticket, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      redirectStep3(navigate);
    } catch (error) {
      if (error.response) {
        // Manejo de error si se recibe una respuesta del servidor.
        alert("¡Error al crear la entrada!");
        console.log("Response Data:", error.message);
      }
    }
  };
  /* Obtiene datos de eventos desde la API y los almacena en el estado global de Redux.*/
  const handleDataEvents = async () => {
    const URL = API_URL_EVENTS;

    const promise = axios
      .get(URL)
      .then((response) => {
        const { data } = response;

        // Mezcla los eventos de forma aleatoria y trae los primeros 12.
        const randomEvents = shuffleArray(data).slice(0, 12);

        return randomEvents;
      })
      .catch((error) => {
        console.error(error.message);
        throw error;
      });

    promise.then((data) => {
      // Almacena los datos de eventos en el estado global de Redux.
      dispatch(setEvents(data));
    });

    return promise;
  };

  return { handleDataEvents, handleCreateEvent, handleCategory, handleTicket };
};

export default useEvents;
