import React, { useEffect } from "react";
import { Carousel, Button, Spinner } from "@material-tailwind/react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import useEvents from "../../hooks/useEvents";
import CardHost from "./CardHost";
import { useSelector } from "react-redux";
import { getEvents } from "../../redux/sliceEvents";
import { useState } from "react";

export default function HostCards() {
  const { handleDataEvents } = useEvents();

  useEffect(() => {
    handleDataEvents();
  }, []);

  const events = useSelector(getEvents);
  const [groupedEvents, setGroupedEvents] = useState({});

  const activateSpinner = events.length;

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

  const customCarouselStyles = {
    arrowIconSize: 60,
    paginationDotColor: "text-black",
  };

  return (
    <div className="mt-10 mb-5 mx-40 relative">
      <div className="hidden md:block lg:block xl:block">
        {/* Desktop view */}
        <Carousel
          className="rounded-xl"
          controls
          {...customCarouselStyles}
          slidesPerPage={4}
        >
          {activateSpinner ? (
            Array.isArray(events) && events.length > 0 ? (
              Array(Math.ceil(events.length / 4))
                .fill()
                .map((_, index) => (
                  <div className="flex gap-4" key={index}>
                    {Object.values(groupedEvents)
                      .slice(index * 4, (index + 1) * 4)
                      .map((individualEvent) => {
                        return (
                          <CardHost
                            key={individualEvent.eventHost.id}
                            eventHost={individualEvent.eventHost}
                            location={individualEvent.location}
                          />
                        );
                      })}
                  </div>
                ))
            ) : (
              <div className="flex justify-center gap-2 ">
                <Button size="lg" color="black">
                  <FiChevronLeft size={customCarouselStyles.arrowIconSize} className="cursor-pointer" />
                  <FiChevronRight size={customCarouselStyles.arrowIconSize} className="cursor-pointer" />
                </Button>
              </div>
            )
          ) : (
            <Spinner className="h-12 w-12" />
          )}
        </Carousel>
      </div>

      <div className="block md:hidden">
       
       
        {/* Mobile view */}
        <Carousel
          className="rounded-xl"
          controls
          {...customCarouselStyles}
          slidesPerPage={1}
        >
          {activateSpinner ? (
            Array.isArray(events) && events.length > 0 ? (
              events.map((individualEvent) => {
                return (
                  <div key={individualEvent.eventHost.id}>
                    <CardHost
                      eventHost={individualEvent.eventHost}
                      location={individualEvent.location}
                    />
                  </div>
                );
              })
            ) : (
              <div className="flex justify-center gap-2 ">
                <Button size="lg" color="black">
                  <FiChevronLeft size={customCarouselStyles.arrowIconSize} className="cursor-pointer" />
                  <FiChevronRight size={customCarouselStyles.arrowIconSize} className="cursor-pointer" />
                </Button>
              </div>
            )
          ) : (
            <Spinner className="h-12 w-12" />
          )}
        </Carousel>
      </div>
    </div>
  );
}







  
  

