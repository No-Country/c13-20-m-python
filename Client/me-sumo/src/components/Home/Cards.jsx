import { useEffect } from "react";
import CardEvent from "./CardEvent";
import { getEvents } from "../../redux/sliceEvents";
import { useSelector } from "react-redux";
import useEvents from "../../hooks/useEvents";

export default function Cards() {
  const { handleDataEvents } = useEvents();

  useEffect(() => {
    handleDataEvents();
  }, []);

  const events = useSelector(getEvents);

  return (
    <div className="flex gap-4">
      {events.map((individualEvent) => (
        <CardEvent
          key={individualEvent.id}
          image={events.image}
          name={individualEvent.name}
          date={individualEvent.date}
          location={individualEvent.location}
          price={individualEvent.ticketPrice}
          // host={individualEvent.eventHost.username}
        />
      ))}
    </div>
  );
}
