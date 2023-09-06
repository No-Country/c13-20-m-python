import { getToken } from "../redux/sliceLogin";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { API_URL_EVENTS } from "../config/api";
import { setEvents } from "../redux/sliceEvents";
/**
 * Hook personalizado para gestionar operaciones relacionadas con eventos.
 *
 * Este hook proporciona funciones para crear nuevos eventos y obtener datos de eventos desde una API.
 * Utiliza el token de autenticación del usuario y Redux para gestionar los eventos.
 **/


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

  /* Crea un nuevo evento en la API.*/
  const handleCreateEvent = async (newEvent) => {
    try {
      const { data } = await axios.post(API_URL_EVENTS, newEvent, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
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
  
  return { handleDataEvents, handleCreateEvent };
};

export default useEvents;

