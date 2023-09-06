// import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import organizador from "../assets/images/organizador.png";
import asistente from "../assets/images/asistente.png";

export default function Onboarding() {
  const navigate = useNavigate();
  // const {
  //   // formState: { errors },
  // } = useForm();

  return (
    <div className="p-0 mt-0 pt-0 sm:p-2 w-full">
      <section className="p-0 sm:p-2 bg-gray-50 dark:bg-gray-900 h-screen rounded">
        <div className="">
          <h1 className="mt-0 pt-0 font-bold leading-tight tracking-tight text-gray-900 md:text-4xl text-2xl dark:text-white  ">
            Bienvenido a Me sumo
          </h1>
          <h3 className="text-m font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white md:my-6">
            ¿Que querés hacer?
          </h3>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="cursor-pointer bg-white rounded-lg shadow w-96 dark:border pb-3 mt-2 md:mt-0 dark:bg-gray-800 dark:border-gray-700  lg:max-w-md  m-auto">
            <div className="flex justify-center">
              <img
                src={organizador}
                alt="Planificacion de un evento"
                className="w-full h-auto rounded"
              />
            </div>
            <div className="flex justify-center p-2">
              <p className="text-base">
                Acá vas a poder crear y planificar tu evento. Podrás gestionar
                entradas, lugar, fecha y mucho más!
              </p>
            </div>
            <button
              onClick={() => navigate("/create-event")}
              className="text-xl font-bold leading-tight tracking-tight text-gray-900 lg:text-2xl dark:text-white"
            >
              Quiero Organizar un Evento
            </button>
          </div>
          <div className="cursor-pointer bg-white rounded-lg shadow dark:border w-96 pb-3 mt-2 md:mt-0 dark:bg-gray-800 dark:border-gray-700  lg:max-w-md  m-auto">
            <div className=" flex justify-center">
              <img
                src={asistente}
                alt="Personas festejando"
                className="w-full h-auto rounded"
              />
            </div>
            <div className="flex justify-center p-2">
              <p className="text-sm lg:text-base">
                Acá vas a poder conocer, y elegir los mejores eventos, de todo
                tipo, en tu región, o donde quieras ir!
              </p>
            </div>
            <button
              className="text-xl font-bold leading-tight tracking-tight text-gray-900 lg:text-2xl dark:text-white"
              onClick={() => {
                navigate("/interests1");
              }}
            >
              Quiero Participar de un evento
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
