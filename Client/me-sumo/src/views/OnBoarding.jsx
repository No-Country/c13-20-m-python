import { useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

import organizador from "../assets/images/organizador.png";
import asistente from "../assets/images/asistente.png";

export default function Onboarding() {
  const navigate = useNavigate();

  return (
    <div className="p-0 mt-0 pt-0 sm:p-2 w-full">
      <section className="p-0 sm:p-2  bg-orange-50	 dark:bg-gray-900 h-screen rounded">
        <div className="text-left">
          <h1 className="mt-0 pt-0 [font-family:'Lato-Bold',_Helvetica] font-bold text-[#003049] text-[48px] tracking-[0] leading-[normal] md:text-4xl text-2xl dark:text-white">
            Bienvenido a MeSumo
          </h1>
          <h3 className="[font-family:'Lato-Light',_Helvetica] font-light text-[#003049] text-[16px] tracking-[0] leading-[24px] md:text-2xl dark:text-white md:my-6">
            Para empezar, elige tu rol inicial en la app
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
