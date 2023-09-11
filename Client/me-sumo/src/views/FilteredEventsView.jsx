import {
  getFilteredEvents,
  getFilteredEventsCategories,
} from "../redux/sliceEvents";
import { useSelector } from "react-redux";

import FilteredEvents from "../components/FilteredEvents/FilteredEvents";
import Dropdown from "../components/FilteredEvents/Dropdown";

export default function FilteredEventsView() {
  const events = useSelector(getFilteredEvents);
  const category = useSelector(getFilteredEventsCategories);

  return (
    <div className="mt-7">
      <h1 className="text-2xl font-bold text-left">
        Resultados de eventos en {events[0].location}
      </h1>
      <div className="flex gap-5">
        <Dropdown
          events={events}
          placeholder={"Precio"}
          property={"ticketPrice"}
        />
        <Dropdown
          events={category}
          placeholder={"Categoria"}
          property={"name"}
        />
        <Dropdown events={events} placeholder={"Fecha"} property={"date"} />
      </div>
      <FilteredEvents events={events} />
    </div>
  );
}
