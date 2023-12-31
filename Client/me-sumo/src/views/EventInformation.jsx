import { Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { isLogged } from "../redux/sliceLogin";
import { setEventSelected } from "../redux/sliceTickets";
import useEvents from "../hooks/useEvents";

import { Typography } from "@material-tailwind/react";
import { FooterWithSocialLinks } from "../components/Footer/Footer";
import Cards from "../components/Home/Cards";

import locationSign from "../assets/icons/location_sign.svg";
import calendar from "../assets/icons/calendar.svg";
import ticketPrice from "../assets/icons/ticket_price.svg";
import { MdOutlineSchedule } from "react-icons/md";
import { FaRegCalendarAlt }from "react-icons/fa";
import ellipse2 from '../../images/ellipse2.png'

export default function EventInformation() {
  const logged = useSelector(isLogged);

  const { handleGetEvent } = useEvents();
  const pk = useParams();
  const [event, setEvent] = useState(null);
  const [siguiendo, setSiguiendo] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const event = await handleGetEvent(pk);

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
      <div className="md:w-10/12 mb-12 m-auto">
        <h1 className="text-5xl text-left py-10 [font-family:'Lato-Bold',Helvetica] font-bold text-[#003049] tracking-[0] leading-[normal]	">{event.name}</h1>
        <p className="text-left text-[20px] [font-family:'Lato-Light',Helvetica] font-normal text-[#003049]">{event.description}</p>
      </div>
      <div className="flex flex-col md:flex-row w-full md:w-10/12 m-auto">
        <div className="w-full md:w-5/12">
          <h3 className="text-3xl	text-left [font-family:'Lato-SemiBold',Helvetica] font-semibold text-[#003049] whitespace-nowrapp y-10">Datos del Evento</h3>
          <div className=" md:py-4 text-left">
            <h5 className="mt-5 text-left text-2xl [font-family:'Lato-Medium',Helvetica] font-medium text-[#003049]">Fecha y hora</h5>
            <div className="flex items-center py-4">
              {" "}
              <FaRegCalendarAlt className="text-[#003049] text-2xl mr-2" />{" "}
              <p className="text-l [font-family:'Lato-Light',Helvetica] font-light text-[#003049] text-left" type="date">
              {event.date.slice(0, 10)} <span className="text-xs mx-2 text-[#003049]">⚫</span>
                {event.date.slice(11, event.date.length - 1)}
              </p>
            </div>
            <p className="text-left"></p>
          </div>
          <div className="md:py-4 text-left">
            <h5 className="text-left  text-2xl [font-family:'Lato-Light',Helvetica] font-normal text-[#003049]">Ubicación</h5>
            <div className="flex items-center py-4">
              {" "}
              <img src={locationSign} alt="Calendario" className="mr-2 text-[#003049] h-6 w-6" />{" "}
              <p className="text-l text-left [font-family:'Lato-Light',Helvetica] font-light text-[#003049] text-[18px] tracking-[0] leading-[24px] whitespace-nowrap" type="date">
                {event.location}
              </p>
            </div>
            <p className="text-left"></p>
          </div>
          <div className="md:py-4 text-left">
  <h5 className="text-left text-2xl [font-family:'Lato-Light',Helvetica] font-normal text-[#003049]">Duración</h5>
  <div className="flex items-center py-4">
    <MdOutlineSchedule className="text-[#003049] text-2xl mr-2" />{" "}
    <p className="text-l text-left [font-family:'Lato-Light',Helvetica] font-light text-[#003049] text-[18px] tracking-[0] leading-[24px] whitespace-nowrap">
      1:30 hs
    </p>
  </div>
  <p className="text-left"></p>
</div>

        </div> 
        <div className="flex flex-col justify-between items-center  w-10/12">
          <div className="w-full md:w-6/12 flex flex-col ml-auto">
            <h3 className="decoration-slate-950	py-4  [font-family:'Lato-Light',Helvetica]  text-[#003049] text-xl sm:text-3xl font-semibold">
              Organizado por:
            </h3>
            <div className="flex flex-row justify-between bg-amber-50 py-2 md:py-4 px-2 sm:px-5 my-3 shadow-lg rounded-lg">
  <div className="flex flex-row items-center">
    <img src={ellipse2} alt="Imagen de perfil" className="w-10 h-10 rounded-full mr-2" />
    <p className="font-medium [font-family:'Lato-Light',Helvetica] text-[#003049] text-lg">{event.eventHost?.username}</p>
  </div>



              {!siguiendo || !logged ? (
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
                  Seguido
                </Button>
              )}
            </div>
            <>
              <div className="md:mt-4 flex flex-row justify-between">
                <div className="flex flex-row">
                  <img
                    src={ticketPrice}
                    alt="Calendario"
                    className="w-8 h-auto"
                  />
                  <p className="p-2 [font-family:'Lato-Light',Helvetica] font-light text-[#003049] text-l">
                    {event.ticketPrice == "Gratis" ? (
                      <div>Evento Gratuito</div>
                    ) : (
                      `A partir de $ ${event.ticketPrice}`
                    )}
                  </p>
                </div>
                <p className="text-l justify-self-end[font-family:'Lato-Light',Helvetica] font-light text-[#003049] self-center">
                  {event.capacity} Disponibles
                </p>
              </div>
            </>
            {logged && (
              <Button className="my-10 bg-orange-600" onClick={handleNextStep}>
                Adquirir Entradas
              </Button>
            )}
          </div>
        </div>
      </div>

      <div className="text-left mt-30">
      <Typography  className="md:justify-start text-[#003049] [font-family:'Lato-SemiBold',_Helvetica] font-semibold  text-[40px] tracking-[0] leading-[normal] whitespace-nowrap mt-32 mb-8 ml-36">
            Eventos Relacionados
          </Typography>
      <Cards />
    </div>
     <div className="mt-40">
        <FooterWithSocialLinks className="w-full" />
      </div>
    </div>
  ) : (
    <div>El evento no se encuentra disponible</div>
  );
}
