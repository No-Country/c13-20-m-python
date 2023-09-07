import { getToken } from "../redux/sliceLogin";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL_EVENTS } from "../config/api";
import { setEvents } from "../redux/sliceEvents";



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

  const redirect = (navigate) => {
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
      redirect(navigate);
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
      
      
      // Mezcla los eventos de forma aleatoria y trae los primeros 12.
      const randomEvents = shuffleArray(data).slice(0, 12);
      console.log(randomEvents)
      
      
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

  return { handleDataEvents, handleCreateEvent, handleCategory };

};

export default useEvents;

