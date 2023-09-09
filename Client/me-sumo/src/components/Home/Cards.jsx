/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { Spinner, Carousel, Button } from "@material-tailwind/react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import useEvents from "../../hooks/useEvents";
import CardEvent from "./CardEvent";
import { getEvents } from "../../redux/sliceEvents";
/**
 * Componente de tarjetas de eventos con carrusel y botones de navegación.
 *
 * Este componente muestra una lista de tarjetas de eventos utilizando la información proporcionada
 * por el estado global de Redux. Muestra un carrusel con botones de navegación y un spinner de carga
 * mientras se obtiene la información de los eventos.
 **/
export default function Cards() {
  const navigate = useNavigate();

  const { handleDataEvents } = useEvents();

  useEffect(() => {
    handleDataEvents();
  }, []);

  // Obtener la lista de eventos desde el estado global de Redux.
  const events = useSelector(getEvents);

  // Determinar si se debe activar el spinner de carga basado en la longitud de la lista de eventos.
  const activateSpinner = events.length;

  return (
    <div>
      <Carousel className="rounded-xl" controls>
        {activateSpinner ? (
          // Mapear la lista de eventos y agruparlos en grupos de 4.
          Array.isArray(events) && events.length > 0 ? (
            Array(Math.ceil(events.length / 4))
              .fill()
              .map((_, index) => (
                <div className="flex gap-4" key={index}>
                  {events
                    .slice(index * 4, (index + 1) * 4)
                    .map((individualEvent) => (
                      <CardEvent
                        key={individualEvent.id}
                        image={individualEvent.event_images}
                        name={individualEvent.name}
                        date={individualEvent.date}
                        location={individualEvent.location}
                        price={individualEvent.ticketPrice}
                        onAction={() =>
                          navigate(`/event/${individualEvent.id}`)
                        }
                      />
                    ))}
                </div>
              ))
          ) : (
            <div className="flex justify-center gap-2">
              <Button size="lg" color="black">
                <FiChevronLeft size={24} className="cursor-pointer" />
                <FiChevronRight size={24} className="cursor-pointer" />
              </Button>
            </div>
          )
        ) : (
          // Mostrar un spinner de carga si no se han cargado los eventos.
          <Spinner className="h-12 w-12" />
        )}
      </Carousel>
    </div>
  );
}
