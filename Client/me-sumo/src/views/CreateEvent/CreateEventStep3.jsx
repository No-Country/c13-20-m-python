import Checks from "../../components/Shared/checks";
import { Button } from "@material-tailwind/react";
import useEvents from "../../hooks/useEvents";
import { useSelector } from "react-redux";
import { BiLocationPlus } from "react-icons/bi";
import { BsCalendarDate } from "react-icons/bs";
import { GiTicket } from "react-icons/gi";

export default function CreateEventStep3() {
  const eventInfo = useSelector((state) => state.createEvent.eventData);
  const id = eventInfo.id;
  const catInfo = useSelector((state) => state.createEvent.categories);
  const { handleCategory } = useEvents();

  return (
    <div>
      <div>
        <h1 className="text-2xl mt-3 font-bold items-center justify-center">
          Crear un nuevo Evento - Paso 3
        </h1>
        <Checks />
      </div>
      <h2 className="text-2xl mt-3 font-bold">Resumen del Evento</h2>
      <div className="flex items-center justify-center mt-3 mb-3">
        <img
          src={eventInfo.event_images}
          alt="event-image"
          className="rounded-xl  w-64 h-64"
        />
        <div className="text-left ml-8 mt-3 align-top w-64 h-64">
          <h2 className="text-xl mt-3 font-bold justify">{eventInfo.name}</h2>
          <div className="flex align-center mt-4">
            <BsCalendarDate />
            <p className="ml-2">Fecha: {eventInfo.date}</p>
          </div>
          <div className="flex align-center mt-3">
            <BiLocationPlus />
            <p className="ml-2"> {eventInfo.location}</p>
          </div>
          <div className="flex align-center mt-3">
            <GiTicket />
            <p className="ml-2"> $ {eventInfo.ticketPrice}</p>
          </div>
        </div>
      </div>
      <Button
        title="Crear Evento"
        onClick={() => handleCategory(catInfo, id)}
        className="m-2"
      >
        Finalizar
      </Button>
    </div>
  );
}
