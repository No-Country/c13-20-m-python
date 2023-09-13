import { useNavigate } from "react-router-dom";
import organizador from "../assets/images/organizador.png";
import asistente from "../assets/images/asistente.png";

export default function Onboarding() {
  const navigate = useNavigate();

  return (
    <div className="p-0 mt-10 pt-0 sm:p-2 md:mx-20">
      <section className="p-0 sm:p-2 bg-orange-50 dark:bg-gray-900 h-screen rounded">
        <div className="text-left">
          <h1 className="mt-0 pt-0 [font-family:'Lato-Bold',_Helvetica] font-bold text-[#003049] text-[48px] tracking-[0] leading-[normal] md:text-4xl text-2xl">
            Bienvenido a MeSumo
          </h1>
          <h3 className="mt-10 [font-family:'Lato-Light',_Helvetica] font-light text-[#003049]tracking-[0] leading-[24px] md:text-xl dark:text-white md:my-6">
            Para empezar, elige tu rol inicial en la app
          </h3>
        </div>
        <div className="mt-10 flex flex-col bg-orange-50 sm:ml-8 sm:mr-8 lg:ml-96 lg:mr-96 w-full md:w-[846px] items-center justify-center gap-[48px] relative">
  {/* Tarjeta del asistente */}
  <div className="flex flex-col md:flex-row relative shadow-[0px_4px_24px_#00304926] rounded-lg cursor-pointer">
    <div className="md:w-1/2">
      <div className="cursor-pointer">
        <img
          src={asistente}
          alt="Personas festejando"
          className="h-full w-full object-cover md:w-[400px] lg:w-[400px] rounded-lg saturate-100"
        />
      </div>
    </div>

    <div className="md:w-1/2 text-left md:text-left mt-6 md:ml-20">
      <p className="md:text-2xl mt-6 left-0 items-start font-bold text-[#003049] tracking-[0] leading-[normal]">
        Soy Participante
      </p>
      <div className="md:w-[299px] text-left md:text-left d:mx-10 items-start">
        <p className="mt-6 text-base md:text-base top-0 items-start font-light text-[#003049] tracking-[0] leading-[24px]">
          Acá vas a poder conocer y elegir los mejores eventos, de todo tipo, en tu región, o donde quieras ir.
        </p>
        <div className="mt-6 mb-10 flex w-full items-center justify-center gap-[8px] p-[16px] bg-[#f77f00] rounded-[12px]">
          <button
            className="font-medium text-[#fef2e6] text-[18px] tracking-[0] leading-[normal]"
            onClick={() => {
              navigate("/interests1");
            }}
          >
            Quiero ser participante
          </button>
        </div>
      </div>
    </div>
  </div>
          {/* Tarjeta del organizador */}
          <div className="flex flex-col md:flex-row relative shadow-[0px_4px_24px_#00304926] rounded-lg cursor-pointer">
    <div className="md:w-1/2">
      <div className="cursor-pointer">
                <img
                  src={organizador}
                  alt="Planificacion de un evento"
                  className="h-full w-full object-cover md:w-[400px] lg:w-[400px] rounded-lg saturate-100"
                />
              </div>
            </div>

            <div className="md:w-1/2 text-left md:text-left mt-6 md:ml-20">
      <p className="md:text-2xl mt-6 left-0 items-start font-bold text-[#003049] tracking-[0] leading-[normal]">
                Soy Organizador
              </p>
              <div className="md:w-[299px] text-left md:text-left d:mx-10 items-start">
        <p className="mt-6 text-base md:text-base top-0 items-start font-light text-[#003049] tracking-[0] leading-[24px]">
                  Acá vas a poder crear y planificar tu evento. Podrás gestionar
                  entradas, lugar, fecha y mucho más.
                </p>
                <div className="mt-6 mb-10 flex w-full items-center justify-center gap-[8px] p-[16px] bg-[#f77f00] rounded-[12px]">
          <button
            className="font-medium text-[#fef2e6] text-[18px] tracking-[0] leading-[normal]"
                    onClick={() => {
                      navigate("/create-event");
                    }}
                  >
                    Quiero ser organizador
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}








