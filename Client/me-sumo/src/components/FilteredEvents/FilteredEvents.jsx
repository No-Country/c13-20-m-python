import CardEvent from "../Home/CardEvent";
import { useSelector } from "react-redux";
import { getFilterEventsBy } from "../../redux/sliceEvents";
import { Carousel } from "@material-tailwind/react";

export default function FilteredEvents({ events }) {
  const filterStrings = useSelector(getFilterEventsBy);

  const filteredEvents = events.filter((event) => {
    const currentDate = new Date();
    const eventDate = new Date(event.date);
    const timeDiff = eventDate.getTime() - currentDate.getTime();
    const diffDays = timeDiff / (1000 * 3600 * 24);

    if (!filterStrings || filterStrings.length === 0) {
      return event;
    } else if (filterStrings.includes("Gratis")) {
      return event.ticketPrice === "Gratis";
    } else if (filterStrings.includes("De Pago")) {
      return event.ticketPrice !== "Gratis";
    } else if (filterStrings.includes("Eventos de Hoy")) {
      return diffDays === 0;
    } else if (filterStrings.includes("Esta Semana")) {
      return diffDays >= 0 && diffDays <= 7;
    } else if (filterStrings.includes("Este Mes")) {
      return diffDays >= 0 && diffDays <= 30;
    } else {
      return filterStrings.some((filterString) => {
        return event.categories.some(
          (category) => category.name === filterString
        );
      });
    }
  });

  return (
    <Carousel perPage={4} arrow={true}>
      <div className="grid grid-cols-5 gap-4 mt-6">
        {filteredEvents.map((individualEvent) => (
          <CardEvent
            key={individualEvent.id}
            eventId={individualEvent.id}
            image={individualEvent.event_images}
            name={individualEvent.name}
            date={individualEvent.date}
            location={individualEvent.location}
            price={individualEvent.ticketPrice}
          />
        ))}
      </div>
    </Carousel>
  );
}
