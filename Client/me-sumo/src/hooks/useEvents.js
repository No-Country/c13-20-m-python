import { getToken } from "../redux/sliceLogin";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL_EVENTS, API_URL_ORGANIZATOR } from "../config/api";
import { setEvents } from "../redux/sliceEvents";
import { setCategories, setEvent, setTicket } from "../redux/sliceCreateEvent";

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

  const handleTicket = async (ticket, id) => {
    try {
      await axios.patch(API_URL_ORGANIZATOR + `${id}/`, ticket, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(setTicket(ticket));
      redirectStep3(navigate);
    } catch (error) {
      if (error.response) {
        // Manejo de error si se recibe una respuesta del servidor.
        alert("¡Error al crear la entrada!");
        console.log("Response Data:", error.message);
      }
    }
  };

  const handleCategory = async (category, id) => {
    const modifyCategory = { categories: category };
    try {
      await axios.patch(API_URL_ORGANIZATOR + `${id}/`, modifyCategory, {
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

  const handleBuyTicket = async (id, data) => {
    try {
      await axios.post(API_URL_EVENTS + `${id}/buy-ticket`, data, {
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

  /* Obtiene datos de eventos desde la API y los almacena en el estado global de Redux.*/
  const handleDataEvents = async () => {
    const URL = API_URL_EVENTS;

    const promise = axios
      .get(URL)
      .then((response) => {
        const { data } = response;

        // Mezcla los eventos de forma aleatoria
        const randomEvents = shuffleArray(data);

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

  const handleGetEvent = async (id) => {
    try {

      const response = await axios.get(API_URL_EVENTS + `${id.pk}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

   

      return response.data;
    } catch (error) {
      if (error.response) {
        // Manejo de error si se recibe una respuesta del servidor.
        //alert("¡Error al encontrar el evento!");
        console.log("Response Data:", error.response.data);
      }
    }
  };

  return {
    handleDataEvents,
    handleCreateEvent,
    handleCategory,
    handleTicket,
    handleGetEvent,
    handleBuyTicket,
  };
};

export default useEvents;
