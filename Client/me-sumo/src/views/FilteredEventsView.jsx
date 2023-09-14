import {
  getFilteredEvents,
  getFilteredEventsCategories,
} from "../redux/sliceEvents";
import { useSelector } from "react-redux";
import { Typography } from "@material-tailwind/react";

import FilteredEvents from "../components/FilteredEvents/FilteredEvents";
import Dropdown from "../components/FilteredEvents/Dropdown";

export default function FilteredEventsView() {
  const events = useSelector(getFilteredEvents);
  const category = useSelector(getFilteredEventsCategories);

  const price = [
    { id: 1, name: "Gratis" },
    { id: 2, name: "De Pago" },
  ];

  const date = [
    { id: 1, date: "Eventos de Hoy" },
    { id: 2, date: "Esta Semana" },
    { id: 2, date: "Este Mes" },
  ];

  return (
    <div className="mt-7 mr-5">
      <Typography className="text-[#003049] [font-family:'Lato-Regular',_Helvetica] font-bold text-[22px] text-left ml-10">
        Resultados de eventos en {events[0].location}
      </Typography>
      <div className="flex gap-5 ml-7">
        <Dropdown events={price} placeholder={"Precio"} property={"name"} />
        <Dropdown
          events={category}
          placeholder={"Categoria"}
          property={"name"}
        />
        <Dropdown events={date} placeholder={"Fecha"} property={"date"} />
      </div>
      <FilteredEvents events={events} />
    </div>
  );
}
