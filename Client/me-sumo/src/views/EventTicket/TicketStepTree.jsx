import { useNavigate } from "react-router-dom";
import { Checkbox } from "@material-tailwind/react";

import Checks from "../../components/Shared/checks";
import TicketResume from "../../components/Ticket/TicketResume";

export default function TicketStepTree() {
  const navigate = useNavigate();

  const onSubmit = () => {
    navigate("/ticketsStepTree");
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
              <div className="flex">
                <Checkbox
                  defaultChecked
                  ripple={true}
                  className="h-8 w-8 rounded-full border-primary-50 bg-primary-50/25 transition-all hover:scale-105 hover:before:opacity-0"
                />
              </div>
              <div className="flex flex-col w-2/3">
                <p className="text-left text-l mt-10 ml-3 font-medium text-primary-800 dark:text-white">
                  Tarjeta de Crédito / Débito
                </p>
                <p className="mt-4 mb-1 text-left text-xs ml-3 text-primary-800">
                  Gestioná la compra de todas tus entradas con tarjeta de
                  crédito o débito de tu banco
                </p>
              </div>
            </div>
          </div>

          <div className="flex w-full justify-center mt-10">
            <div className="flex w-5/6 h-40 bg-primary-700 rounded-xl">
              <div className="flex">
                <Checkbox
                  defaultChecked
                  ripple={true}
                  className="h-8 w-8 rounded-full border-primary-50 bg-primary-50/25 transition-all hover:scale-105 hover:before:opacity-0"
                />
              </div>
              <div className="flex flex-col w-2/3">
                <p className="text-left text-l mt-12 ml-3 font-medium text-primary-800 dark:text-white">
                  Mercado Pago
                </p>
                <p className="mt-4 mb-1 text-left text-xs ml-3 text-primary-800">
                  Gestioná la compra de todas tus entradas con la aplicación de
                  Mercado Pago
                </p>
              </div>
            </div>
          </div>

          <div className="flex w-full justify-center mt-10">
            <div className="flex w-5/6 h-40 bg-primary-700 rounded-xl">
              <div className="flex">
                <Checkbox
                  defaultChecked
                  ripple={true}
                  className="h-8 w-8 rounded-full border-primary-50 bg-primary-50/25 transition-all hover:scale-105 hover:before:opacity-0"
                />
              </div>
              <div className="flex flex-col w-2/3">
                <p className="text-left text-l mt-12 ml-3 font-medium text-primary-800 dark:text-white">
                  Efectivo en Puerta
                </p>
                <p className="mt-4 mb-1 text-left text-xs ml-3 text-primary-800">
                  Abona en efectivo las entradas adquiridas hasta 30 minutos
                  antes del evento.
                </p>
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
