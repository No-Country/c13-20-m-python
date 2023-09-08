import CardEvent from "../Home/CardEvent";

export default function FilteredEvents({ events }) {
  return (
    <div className="flex gap-4 mt-6">
      {events.map((individualEvent) => (
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
