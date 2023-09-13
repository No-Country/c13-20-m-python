import React, { useEffect, useState } from "react";
import CardHost from "./CardHost";
import { useSelector } from "react-redux";
import { getEvents } from "../../redux/sliceEvents";
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md";

export default function HostCarousel() {
  const events = useSelector(getEvents);
  const [groupedEvents, setGroupedEvents] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (Array.isArray(events) && events.length > 0) {
      const grouped = events.reduce((acc, event) => {
        const hostId = event.eventHost.id;
        if (!acc[hostId]) {
          acc[hostId] = event;
        }
        return acc;
      }, {});
      setGroupedEvents(grouped);
    }
  }, [events]);

  const itemsPerPage = 4; // Número de elementos por página
  const totalPages = Math.ceil(Object.values(groupedEvents).length / itemsPerPage);
  const activateSpinner = events.length;
  const totalSlides = Math.ceil(events.length / itemsPerPage);

  const handlePrev = () => {
    // Actualiza currentIndex y currentSlide de manera sincronizada
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    // Actualiza currentIndex y currentSlide de manera sincronizada
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  // Calculamos si el carrusel está en la primera o última página
  const isFirstPage = currentSlide === 0;
  const isLastPage = currentSlide === totalSlides - 1;

  return (
    <div className="mx-28 relative">
      {activateSpinner ? (
        <div className="relative">
          <div className="flex gap-4 transition-transform transform duration-600 ease-in-out">
            {Array.isArray(events) && events.length > 0 ? (
              Object.values(groupedEvents)
                .slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage)
                .map((individualEvent) => (
                  <CardHost
                    key={individualEvent.eventHost.id}
                    eventHost={individualEvent.eventHost}
                    location={individualEvent.location}
                  />
                ))
            ) : null}
          </div>

          <div className="absolute -top-16 right-8">
            {/* Aquí debes agregar tus iconos de flecha personalizados */}
            <button
              onClick={handlePrev}
              className={`text-[#003049] hover:text-[#F77F00] hover:bg-white focus:outline-none ${
                isFirstPage ? "cursor-not-allowed" : ""
              }`}
              disabled={isFirstPage}
            >
              <MdOutlineArrowBackIos className="relative w-[32px] h-[32px]" />
            </button>
            <button
              onClick={handleNext}
              className={`text-[#003049] hover:text-[#F77F00] hover:bg-white focus:outline-none ${
                isLastPage ? "cursor-not-allowed" : ""
              }`}
              disabled={isLastPage}
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









  
  

