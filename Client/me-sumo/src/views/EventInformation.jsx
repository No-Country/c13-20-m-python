import { Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setEventSelected } from "../redux/sliceTickets";
import useEvents from "../hooks/useEvents";
import calendar from "../assets/icons/calendar.svg";

import ticketPrice from "../assets/icons/ticket_price.svg";

export default function EventInformation() {
  const { handleGetEvent } = useEvents();
  const id = useParams();
  const [event, setEvent] = useState(null);
  const [siguiendo, setSiguiendo] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const event = await handleGetEvent(id);
        console.log("evento", event);
        setEvent(event);
      } catch (error) {
        console.log("Error en la visualizacion del evento");
      }
    };
    fetchData();
    //eslint-disable-next-line
  }, []);

  const handleNextStep = () => {
    dispatch(setEventSelected(event));
    navigate("/ticketsStepOne");
  };

  return event ? (
    <div className="bg-orange-50	">
      <div className="flex flex-col justify-items-center items-center">
        <div className="flex flex-row justify-center w-full md:w-10/12 max-h-72 lg:max-h-96 lg:h-full rounded-lg m-10">
          <img
            className="w-full h-auto object-cover focus:h-full  rounded-lg"
            src={event.event_images}
            alt={event.name}
          />
        </div>
      </div>
      <div className="md:w-10/12 m-auto">
        <h1 className="text-6xl text-left py-10	">{event.name}</h1>
        <p className="text-left">{event.description}</p>
      </div>
      <div className="flex flex-col md:flex-row w-full md:w-10/12 m-auto">
        <div className="w-full md:w-4/12">
          <h3 className="text-4xl	text-left py-10">Datos del Evento</h3>
          <div className=" text-left">
            <h5 className="text-left text-2xl">Fecha y hora</h5>
            <div className="flex items-center py-4">
              {" "}
              <img src={calendar} alt="Calendario" className="mr-2" />{" "}
              <p className="text-xl text-left" type="date">
                {event.date.slice(0, 10)} ⚫{" "}
                {event.date.slice(11, event.date.length - 1)}
              </p>
            </div>
            <p className="text-left"></p>
          </div>
          <div>{event.location}</div>
        </div>
        <div className="flex flex-col justify-between items-center  w-10/12">
          <div className="w-full md:w-6/12 flex flex-col ml-auto  rounded-lg">
            <h3 className="decoration-slate-950	py-4  text-xl sm:text-3xl font-semibold">
              Organizado por:
            </h3>
            <div className="flex flex-row justify-between bg-orange-50 py-2 md:py-4 px-2 sm:px-5 rounded-lg">
              <p className="font-medium	text-lg	">{event.eventHost?.username}</p>
              {!siguiendo ? (
                <Button
                  onClick={() => setSiguiendo(true)}
                  className="bg-orange-600"
                >
                  Seguir
                </Button>
              ) : (
                <Button
                  onClick={() => setSiguiendo(false)}
                  className="outlined"
                >
                  Siguiendo
                </Button>
              )}
            </div>

            <>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row">
                  <img
                    src={ticketPrice}
                    alt="Calendario"
                    className="w-10 h-auto"
                  />
                  <p className="p-2  text-2xl">
                    {event.ticketPrice == "Gratis" ? (
                      <div>Evento Gratuito</div>
                    ) : (
                      `A partir de $ ${event.ticketPrice}`
                    )}
                  </p>
                </div>
                <p className="justify-self-end	self-center">
                  {event.capacity} Disponibles
                </p>
              </div>
            </>

            <Button className="my-10 bg-orange-600">Adquirir Entradas</Button>

          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>El evento no se encuentra disponible</div>
  );
}
