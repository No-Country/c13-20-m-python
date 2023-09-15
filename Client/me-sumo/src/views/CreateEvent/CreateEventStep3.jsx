import Checks from "../../components/Shared/checks";
import { Button } from "@material-tailwind/react";
import useEvents from "../../hooks/useEvents";
import { useSelector } from "react-redux";
import {
  getEventData,
  getCategoriesData,
  getTicketData,
} from "../../redux/sliceCreateEvent";
import { BiLocationPlus } from "react-icons/bi";
import { BsCalendarDate } from "react-icons/bs";
import { GiTicket } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";

export default function CreateEventStep3() {
  const eventInfo = useSelector(getEventData);
  const id = eventInfo.id;
  const catInfo = useSelector(getCategoriesData);
  const ticketInfo = useSelector(getTicketData);
  const { handleCategory } = useEvents();

  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <h1 className="text-2xl mt-3 font-bold items-center justify-center">
          Crear un nuevo Evento - Paso 3
        </h1>
        <Checks />
      </div>
      <h2 className="text-3xl mt-10 mb-7 font-bold w-2/4 text-primary-800 text-left">
        Resumen del Evento
      </h2>
      <div className="flex items-center justify-center rounded-xl shadow-blue-gray-500 shadow-md mt-3 mb-3 h-72 w-2/4">
        <img
          src={eventInfo.event_images}
          alt="event-image"
          className="rounded-xl  w-64 h-64"
        />
        <div className="text-left ml-8 mt-3 align-top w-64 h-64">
          <h2 className="text-xl mt-3 font-bold justify text-primary-800">
            {eventInfo.name}
          </h2>
          <div className="flex align-center mt-8">
            <BsCalendarDate />
            <p className="ml-2 text-primary-800">Fecha: {eventInfo.date}</p>
          </div>
          <div className="flex align-center mt-7">
            <BiLocationPlus />
            <p className="ml-2 text-primary-800"> {eventInfo.location}</p>
          </div>
          <div className="flex gap-5  mt-7">
            <div className="flex align-center align-center h-10">
              <GiTicket />
              <p className="ml-2 text-primary-800">
                {" "}
                $ {ticketInfo.ticketPrice}
              </p>
            </div>
            <div className="flex">
              <FaUsers />
              <p className="ml-2 text-primary-800">
                {" "}
                {ticketInfo.capacity} personas
              </p>
            </div>
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
