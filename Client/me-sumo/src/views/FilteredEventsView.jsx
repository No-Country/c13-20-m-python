import { getFilteredEvents } from "../redux/sliceEvents";
import { useSelector } from "react-redux";

import FilteredEvents from "../components/FilteredEvents/FilteredEvents";
import Dropdown from "../components/FilteredEvents/Dropdown";

export default function FilteredEventsView() {
  const events = useSelector(getFilteredEvents);

  return (
    <div className="mt-7">
      <h1 className="text-2xl font-bold text-left">
        Resultados de eventos en {events[0].location}
      </h1>
      <div className="flex gap-5">
        <Dropdown categorias={events} placeholder={"Precio"} />
        <Dropdown categorias={events} placeholder={"Categoria"} />
        <Dropdown categorias={events} placeholder={"Fecha"} />
      </div>
      <FilteredEvents events={events} />
    </div>
  );
}
