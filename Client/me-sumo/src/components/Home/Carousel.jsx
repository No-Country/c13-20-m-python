// Importar los componentes y funciones necesarios
import { Carousel, Typography, Button } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import { getEvents } from "../../redux/sliceEvents";
import { useNavigate } from "react-router-dom";

// URL de la imagen por defecto para eventos sin imagen
const defaultImageURL = "https://www.eventindustryshow.com/img/blog/Trabalhar-em-Eventos-11.jpg";

// Componente principal que muestra un carrusel de eventos con contenido
export default function CarouselWithContent() {
  // Obtener la lista de eventos desde el estado global usando Redux
  const events = useSelector(getEvents);
  // Obtener la función de navegación para redirigir a las páginas de eventos individuales
  const navigate = useNavigate();

  return (
    // Componente de carrusel que permite desplazarse horizontalmente a través de los eventos
    <Carousel loop={true} className="h-96">
      {/* Mapear y mostrar los primeros 3 eventos en el carrusel */}
      {events.slice(0, 3).map((event) => (
        <div key={event.id} className="relative w-full h-96">
          {/* Contenedor de imagen del evento */}
          <div className="relative h-96">
            {/* Mostrar la imagen del evento o la imagen por defecto si no hay imagen */}
            <img
              src={event.event_images || defaultImageURL}
              alt={event.name}
              className="absolute inset-0 w-full h-96 object-cover"
            />
          </div>
          {/* Fondo oscuro para el contenido del evento */}
          <div className="absolute inset-0 grid place-items-center bg-black/75">
            {/* Contenido del evento */}
            <div className="w-3/4 text-center md:w-2/4">
              {/* Título del evento */}
              <Typography
                className="mb-4 text-3xl md:text-4xl lg:text-5xl [font-family:'Lato-ExtraBold',_Helvetica] font-extrabold text-orange-50  tracking-[0] leading-[normal]"
              >
                {event.name}
              </Typography>
              {/* Descripción del evento */}
              <Typography
                className="mb-8 opacity-80 [font-family:'Lato-ExtraBold',_Helvetica] font-normal text-orange-50  text-[20px] tracking-[0] leading-[normal]"
              >
                {event.description}
              </Typography>
              {/* Botón para explorar más detalles del evento */}
              <div className="flex justify-center gap-2">
                <Button
                  size="lg"
                  color="orange"
                  onClick={() => navigate(`/event/${event.id}`)}
                >
                  Explorar
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}



