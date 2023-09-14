import { useEffect, useState } from "react";
import { Typography } from "@material-tailwind/react";
import useUserData from "../hooks/useUserData";
import EventDetail from "../components/OrganizatorProfile/EventDetail";

export default function OrganizProfile() {
  const { searchUserEventsData } = useUserData();
  const [events, setEvents] = useState([]);
  const activateSpinner = events;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const eventsData = await searchUserEventsData();
        console.log(eventsData);

        setEvents(eventsData);
      } catch (error) {
        console.log("Error en la visualizacion del evento");
      }
    };
    fetchData();
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      <div className=" text-primary-800 w-full text-left pb-10">
        <div className="p-6 my-2 text-4xl ">
          <Typography className="text-[#003049] [font-family:'Lato-Regular',_Helvetica] font-bold text-[38px] tracking-[0] leading-[24px]">
            Mis eventos creados
          </Typography>
        </div>
        <div className="w-full flex">
          <div className="w-1/3 mt-10 pl-7">
            <Typography className="text-[#003049] [font-family:'Lato-Regular',_Helvetica] font-semibold text-[15px] tracking-[0] leading-[24px] ml-3">
              Evento
            </Typography>
          </div>
          <div className="flex w-2/3 mt-10 pl-7 justify-center">
            <div className="w-1/4 justify-center">
              <Typography className="text-[#003049] [font-family:'Lato-Regular',_Helvetica] font-semibold text-[15px] tracking-[0] leading-[24px] ml-10">
                Ventas
              </Typography>
            </div>
            <div className="w-1/4">
              <Typography className="text-[#003049] [font-family:'Lato-Regular',_Helvetica] font-semibold text-[15px] tracking-[0] leading-[24px]">
                Saldo
              </Typography>
            </div>
            <div className="w-1/4">
              <Typography className="text-[#003049] [font-family:'Lato-Regular',_Helvetica] font-semibold text-[15px] tracking-[0] leading-[24px] ml-5">
                Estado
              </Typography>
            </div>
            <div className="w-1/4">
              <Typography className="text-[#003049] [font-family:'Lato-Regular',_Helvetica] font-semibold text-[15px] tracking-[0] leading-[24px]">
                Acciones
              </Typography>
            </div>
          </div>
        </div>
        {activateSpinner ? (
          <div>
            {events.map((event) => (
              <EventDetail
                key={event.id}
                image={event.event_images}
                name={event.name}
                date={event.date}
                totalTickets={event.capacity}
                saledTickets={event.tickets_sold}
                price={event.ticketPrice}
                state={event.state}
              />
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center h-32">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        )}
      </div>
    </div>
  );
}
