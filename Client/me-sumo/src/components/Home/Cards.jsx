import { useEffect, useState } from "react";
import CardEvent from "./CardEvent"; 
import { getEvents } from "../../redux/sliceEvents"; 
import { useSelector } from "react-redux"; 
import useEvents from "../../hooks/useEvents"; 
import { useNavigate } from "react-router-dom"; 

import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md"; 

export default function Cards() {
  const navigate = useNavigate(); 

  const { handleDataEvents } = useEvents(); 
  const [currentSlide, setCurrentSlide] = useState(0); // Estado local para controlar el índice del carrusel

  useEffect(() => {
    handleDataEvents(); // Ejecuta handleDataEvents cuando el componente se monta
  }, []);

  const events = useSelector(getEvents); // Obtiene el estado events utilizando el selector getEvents
  const activateSpinner = events.length; // Determina si se debe mostrar un spinner basado en la longitud de events
  const itemsPerPage = 4; // Número de tarjetas de evento por página
  const totalSlides = Math.ceil(events.length / itemsPerPage); // Calcula el número total de páginas en el carrusel

  const handlePrevSlide = () => {
    // Función para manejar el cambio a la página anterior
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    // Función para manejar el cambio a la página siguiente
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  // Calculamos si el carrusel está en la primera o última página
  const isFirstPage = currentSlide === 0;
  const isLastPage = currentSlide === totalSlides - 1;

  return (
    <div className="mx-28 relative ">
      {activateSpinner ? (
        // Si hay eventos disponibles, muestra el carrusel
        <div className="relative">
          <div className="drop-shadow-lg">
            <div className="flex gap-4 transition-transform transform duration-600  ease-in-out">
              {events
                .slice(currentSlide * itemsPerPage, (currentSlide + 1) * itemsPerPage)
                .map((individualEvent) => (
                  // Mapea los eventos en tarjetas individuales
                  <CardEvent
                    key={individualEvent.id}
                    eventId={individualEvent.id}
                    image={individualEvent.event_images}
                    name={individualEvent.name}
                    date={individualEvent.date}
                    location={individualEvent.location}
                    price={individualEvent.ticketPrice}
                    eventHost={individualEvent.eventHost}
                  />
                ))}
            </div>
          </div>
           {/* Botones para navegar entre las páginas del carrusel */}
            <div className="absolute -top-16 right-8">
              <button
                onClick={handlePrevSlide}
                className={`text-[#003049] hover:text-[#F77F00] hover:bg-white focus:outline-none ${
                  isFirstPage ? 'cursor-not-allowed' : '' // Deshabilitar si está en la primera página
                }`}
                disabled={isFirstPage} // Deshabilitar si está en la primera página
              >
                <MdOutlineArrowBackIos className="relative w-[32px] h-[32px]" />
              </button>
              <button
                onClick={handleNextSlide}
                className={`text-[#003049] hover:text-[#F77F00] hover:bg-white focus:outline-none ${
                  isLastPage ? 'cursor-not-allowed' : '' // Deshabilitar si está en la última página
                }`}
                disabled={isLastPage} // Deshabilitar si está en la última página
              >
                <MdOutlineArrowForwardIos className="relative w-[32px] h-[32px]" />
              </button>
            </div>
          </div>
      
      ) : (
        // Si no hay eventos disponibles, muestra un spinner de carga
        <div className="flex justify-center items-center h-32">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      )}
    </div>
  );
}



















