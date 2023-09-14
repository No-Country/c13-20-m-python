import { useNavigate } from "react-router-dom";
import organizador from "../assets/images/organizador.png";
import asistente from "../assets/images/asistente.png";
import { Button } from "@material-tailwind/react";

export default function Onboarding() {
  const navigate = useNavigate();

  return (
    <div className="p-0 mt-5 pt-0 sm:p-2 md:mx-20">
      <section className="p-0 sm:p-2 bg-orange-50 dark:bg-gray-900 h-screen rounded">
        <div className="text-left">
          {/* Título principal */}
          <h1 className="mt-0 pt-0 font-bold text-[#003049] text-[48px] md:text-4xl text-2xl">
            Bienvenido a MeSumo
          </h1>
          {/* Subtítulo */}
          <h3 className="mt-10 font-light text-[#003049] md:text-xl dark:text-white md:my-6">
            Para empezar, elige tu rol inicial en la app
          </h3>
        </div>
        
        {/* Contenedor de las tarjetas */}
        <div className="mt-10 flex flex-col bg-orange-50 sm:ml-8 sm:mr-8 lg:ml-96 lg:mr-96 w-full md:w-[846px] items-center justify-center gap-[48px] relative">
          {/* Tarjeta del asistente */}
          <div className="flex flex-col md:flex-row relative shadow-[0px_4px_24px_#00304926] rounded-lg cursor-pointer">
            {/* Imagen del asistente */}
            <div className="md:w-1/2">
              <div className="cursor-pointer">
                <img
                  src={asistente}
                  alt="Personas festejando"
                  className="h-full w-full object-cover md:w-[400px] lg:w-[400px] rounded-lg saturate-100"
                />
              </div>
            </div>

            {/* Contenido de la tarjeta del asistente */}
            <div className="md:w-1/2 text-left md:text-left mt-6 md:ml-20">
              {/* Título "Soy Participante" */}
              <p className="md:text-2xl mt-6 font-bold text-[#003049]">
                Soy Participante
              </p>
              {/* Descripción */}
              <div className="md:w-[299px] text-left md:text-left d:mx-10 mt-6">
                <p className="text-base md:text-base font-light text-[#003049]">
                  Acá vas a poder conocer y elegir los mejores eventos, de todo
                  tipo, en tu región, o donde quieras ir.
                </p>
                {/* Botón para ser participante */}
                <Button
                  color="orange"
                  buttonType="filled"
                  size="small"
                  rounded
                  ripple="light"
                  onClick={() => {
                    navigate("/interests1");
                  }}
                  className="hover:bg-orange-900 active:bg-orange-300 mt-6 mb-10 flex w-full items-center justify-center gap-[8px] p-[16px] bg-[#f77f00] rounded-[12px]"
                >
                  Quiero ser participante
                </Button>
              </div>
            </div>
          </div>

          {/* Tarjeta del organizador */}
          <div className="flex flex-col md:flex-row relative shadow-[0px_4px_24px_#00304926] rounded-lg cursor-pointer">
            {/* Imagen del organizador */}
            <div className="md:w-1/2">
              <div className="cursor-pointer">
                <img
                  src={organizador}
                  alt="Planificacion de un evento"
                  className="h-full w-full object-cover md:w-[400px] lg:w-[400px] rounded-lg saturate-100"
                />
              </div>
            </div>

            {/* Contenido de la tarjeta del organizador */}
            <div className="md:w-1/2 text-left md:text-left mt-6 md:ml-20">
              {/* Título "Soy Organizador" */}
              <p className="md:text-2xl mt-6 font-bold text-[#003049]">
                Soy Organizador
              </p>
              {/* Descripción */}
              <div className="md:w-[299px] text-left md:text-left d:mx-10 mt-6">
                <p className="text-base md:text-base font-light text-[#003049]">
                  Acá vas a poder crear y planificar tu evento. Podrás gestionar
                  entradas, lugar, fecha y mucho más.
                </p>
                {/* Botón para ser organizador */}
                <Button
                  color="orange"
                  buttonType="filled"
                  size="small"
                  rounded
                  ripple="light"
                  onClick={() => {
                    navigate("/create-event");
                  }}
                  className="hover:bg-orange-900 active:bg-orange-300 mt-6 mb-10 flex w-full items-center justify-center gap-[8px] p-[16px] bg-[#f77f00] rounded-[12px]"
                >
                  Quiero ser organizador
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}









