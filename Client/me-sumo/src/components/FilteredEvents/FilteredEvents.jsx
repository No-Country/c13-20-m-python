import CardEvent from "../Home/CardEvent";
import { useSelector } from "react-redux";
import { getFilterEventsBy } from "../../redux/sliceEvents";

export default function FilteredEvents({ events }) {
  const filterStrings = useSelector(getFilterEventsBy);

  const filteredEvents = events.filter((event) => {
    if (!filterStrings || filterStrings.length === 0) {
      return event;
    } else if (filterStrings.includes("Gratis")) {
      return event.ticketPrice === "Gratis";
    } else if (filterStrings.includes("De Pago")) {
      return event.ticketPrice !== "Gratis";
    } else {
      return filterStrings.some((filterString) => {
        return event.categories.some(
          (category) => category.name === filterString
        );
      });
    }
  });

  return (
    <div className="flex gap-4 mt-6">
      {filteredEvents.map((individualEvent) => (
        <CardEvent
          key={individualEvent.id}
          image={individualEvent.event_images}
          name={individualEvent.name}
          date={individualEvent.date}
          location={individualEvent.location}
          price={individualEvent.ticketPrice}
        />
      ))}
    </div>
  );
}
