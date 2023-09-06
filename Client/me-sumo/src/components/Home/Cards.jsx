import { useEffect } from "react";
import CardEvent from "./CardEvent";
import { getEvents } from "../../redux/sliceEvents";
import { useSelector } from "react-redux";
import useEvents from "../../hooks/useEvents";
import { Spinner } from "@material-tailwind/react";

export default function Cards() {
  const { handleDataEvents } = useEvents();

  useEffect(() => {
    handleDataEvents();
    //eslint-disable-next-line
  }, []);

  const events = useSelector(getEvents);
  const activateSpinner = events.length;

  return (
    <div className="flex gap-4">
      {activateSpinner ? (
        events.map((individualEvent) => (
          <CardEvent
            key={individualEvent.id}
            image={individualEvent.event_images}
            name={individualEvent.name}
            date={individualEvent.date}
            location={individualEvent.location}
            price={individualEvent.ticketPrice}
            // host={individualEvent.eventHost.username}
          />
        ))
      ) : (
        <Spinner className="h-12 w-12" />
      )}
    </div>
  );
}
