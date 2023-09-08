import { useState } from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import { Button } from "@material-tailwind/react";

import useEvents from "../../hooks/useEvents";
import Input from "../../components/Shared/Input";
import Checks from "../../components/Shared/checks";

export default function CreateEventStep2() {
  const { handleTicket } = useEvents();
  const eventInfo = useSelector((state) => state.createEvent.eventData);
  const id = eventInfo.id;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    handleSubmit,
    register,
    // setValue,
    // eslint-disable-next-line no-unused-vars
    formState: { errors },
    // control,
  } = useForm({
    mode: "onChange",
    // resolver: joiResolver(eventSchema),
    defaultValues: {
      capacity: 0,
      ticketPrice: 0,
    },
  });
  return (
    <div className="mt-7">
      <div>
        <Checks />
      </div>
      <div className="m-4 flex flex-col">
        <h1 className="text-2xl font-bold text-left md:text-4xl py-4 my-4">
          Entradas para el evento
        </h1>
        <p className="text-base md:text-lg row text-center sm:text-left my-4 py-4">
          Aún no tienes entradas cargadas en el sistema. Agrega un tipo de
          entrada para que tus asistentes puedan inscribirse a tu evento
        </p>
      </div>
      <Button
        title="+ Agregar Entrada"
        onClick={() => setIsModalOpen(true)}
        className="px-4 m-2 my-5"
      >
        + Agregar Entrada{" "}
      </Button>
      <div className="bg-gray-50 sticky bottom-0 left-0 right-0 flex justify-center p-4">
        <Button
          variant="outlined"
          // onClick={useToHome}
          className="m-2"
          title="Cancelar"
        >
          Cancelar
        </Button>
        <Button title="Crear Evento" type="submit" className="m-2">
          Continuar →
        </Button>
      </div>
      {isModalOpen && (
        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <h3
                        className="text-xl font-semibold leading-6 text-gray-900"
                        id="modal-title"
                      >
                        Entrada de Pago
                      </h3>
                      <form
                        className="space-y-1 w-full mb-4"
                        onSubmit={handleSubmit((newEvent) => {
                          handleTicket(newEvent, id);
                        })}
                      >
                        <Input
                          labelText="Cantidad"
                          type="text"
                          placeholder="Cantidad de entradas"
                          name="capacity"
                          register={register}
                        />
                        <Input
                          labelText="Precio"
                          type="text"
                          placeholder="Precio $"
                          name="ticketPrice"
                          register={register}
                        />
                        <Button
                          variant="outlined"
                          onClick={() => setIsModalOpen(false)}
                          className="m-2"
                          title="Volver"
                        >
                          Volver
                        </Button>
                        <Button
                          title="Crear Evento"
                          type="submit"
                          className="m-2"
                        >
                          Guardar
                        </Button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
