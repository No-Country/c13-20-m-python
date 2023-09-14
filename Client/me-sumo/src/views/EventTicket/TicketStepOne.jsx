import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setBuyerData } from "../../redux/sliceTickets";
import { useNavigate } from "react-router-dom";

import Checks from "../../components/Shared/checks";
import TicketResume from "../../components/Ticket/TicketResume";
import TicketsInputs from "../../components/Ticket/TicketsInputs";

export default function TicketStepOne() {
  const { handleSubmit, register } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //eslint-disable-next-line
  const onSubmit = (data) => {
    dispatch(setBuyerData(data));
    navigate("/ticketsStepTwo");
  };
  return (
    <div className="flex">
      <div className="w-3/5">
        <div className="flex justify-start ml-36">
          <Checks
            firstCheck="Datos de Facturacion"
            secondCheck="Seleccionar Entrada"
            thirdCheck="Pago"
          />
        </div>
        <div className="flex w-full">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <TicketsInputs
              labelText="Nombre y Apellido"
              register={register}
              type="name"
              name="name"
            />
            <TicketsInputs
              labelText="Email"
              register={register}
              type="email"
              name="email"
            />
            <TicketsInputs
              labelText="Teléfono"
              register={register}
              type="number"
              name="telephone"
            />
            <button
              title="Next Step"
              type="submit"
              className="w-80 h-11 bg-primary-50 text-white rounded-l absolute ml-36rem mt-40"
            >
              Continuar →
            </button>
          </form>
        </div>
      </div>
      <div>
        <TicketResume />
      </div>
    </div>
  );
}
