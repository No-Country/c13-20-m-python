import Checks from "../../components/Shared/checks";
import { Button } from "@material-tailwind/react";
import useEvents from "../../hooks/useEvents";
import { useSelector } from "react-redux";

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
      <h2>Resumen del Evento</h2>
      <div className="flex">
        <img
          src={`https://me-sumo.onrender.com${eventInfo.event_images}`}
          alt=""
        />
        <div>
          <h2>{eventInfo.name}</h2>
          <p>Fecha: {eventInfo.date}</p>
          <p>{eventInfo.location}</p>
        </div>
      </div>
      <Button
        title="Crear Evento"
        onClick={() => handleCategory(catInfo, id)}
        className="m-2"
      >
        Continuar →
      </Button>
    </div>
  );
}
