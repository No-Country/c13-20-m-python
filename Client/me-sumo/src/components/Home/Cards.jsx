import { useEffect, useState } from "react";
import CardEvent from "./CardEvent";
import { getEvents } from "../../redux/sliceEvents";
import { useSelector } from "react-redux";
import useEvents from "../../hooks/useEvents";

import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md";

export default function Cards() {
  const { handleDataEvents } = useEvents();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    handleDataEvents();
  }, []);

  const events = useSelector(getEvents);
  const activateSpinner = events.length;
  const itemsPerPage = 4;
  const totalSlides = Math.ceil(events.length / itemsPerPage);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  return (
    <div className="mx-40 relative">
      {activateSpinner ? (
        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex gap-4 transition-transform transform duration-600 ease-in-out">
              {events
                .slice(currentSlide * itemsPerPage, (currentSlide + 1) * itemsPerPage)
                .map((individualEvent) => (
                  <CardEvent
                    key={individualEvent.id}
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
          <div className="absolute -top-14 ml-96 w-full h-full ">
            <button onClick={handlePrevSlide} className=" text-[#003049] hover:text-gray-500 focus:outline-none">
              <MdOutlineArrowBackIos className="relative w-[32px] h-[32px]" />
            </button>
            <button onClick={handleNextSlide} className=" text-[#003049] hover:text-gray-500 focus:outline-none">
              <MdOutlineArrowForwardIos className="relative w-[32px] h-[32px]" />
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-32">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      )}
    </div>
  );
}


















