import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setTicketsAdquired, getEventSelected } from "../../redux/sliceTickets";

import Checks from "../../components/Shared/checks";
import TicketResume from "../../components/Ticket/TicketResume";

export default function TicketStepTwo() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [counterTicket, setCounterTicket] = useState(0);

  const eventData = useSelector(getEventSelected);

  const onSubmit = () => {
    dispatch(setTicketsAdquired(counterTicket));
    navigate("/ticketsStepTree");
  };

  const handleClickUp = () => {
    setCounterTicket(counterTicket + 1);
  };

  const handleClickDown = () => {
    setCounterTicket(counterTicket - 1);
  };

  return (
    <div>
      <div className="flex">
        <div className="w-3/5">
          <div className="flex justify-start ml-36">
            <Checks
              firstCheck="Datos de Facturacion"
              secondCheck="Seleccionar Entrada"
              thirdCheck="Pago"
            />
          </div>
          <div className="flex w-full justify-center ">
            <div className="flex w-5/6 h-40 bg-primary-700 rounded-xl">
              <div className="flex flex-col w-2/3">
                <p className="text-left text-l mt-5 ml-3 font-medium text-primary-800 dark:text-white">
                  Entrada General
                </p>
                <p className="mt-4 mb-1 text-left text-xs ml-3 text-primary-800">
                  Entradas generales con reserva previa, sin posibilidad de
                  reserva de lugares, se ingresa por orden de llegada
                </p>
                <div className="flex align-center">
                  <p className="text-left text-l mt-4 mb-1 ml-3 font-medium text-primary-800 dark:text-white">
                    $ {eventData.ticketPrice}
                  </p>
                  <p className="mt-5 mb-1 text-left text-xs ml-4 text-primary-800">
                    Entradas disponibles: {eventData.capacity}
                  </p>
                </div>
              </div>
              <div className="flex justify-end p-5 items-center">
                {counterTicket > 0 && (
                  <button
                    className="h-14 w-14 text-primary-50 rounded-xl bg-transparent text-xl border border-primary-50"
                    onClick={handleClickDown}
                  >
                    -
                  </button>
                )}
                <p className="p-5">{counterTicket}</p>
                <div className="flex -pr-10">
                  <button
                    className="h-14 w-14 text-primary-50 rounded-xl bg-transparent -pr-10 text-xl border border-primary-50"
                    onClick={handleClickUp}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <TicketResume />
          <button
            title="Next Step"
            onClick={onSubmit}
            className="w-80 h-11 bg-primary-50 text-white rounded-l mt-10 ml-24"
          >
            Continuar →
          </button>
        </div>
      </div>
    </div>
  );
}
