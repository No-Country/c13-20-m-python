// import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import organizador from '../assets/images/organizador.png'
import asistente from '../assets/images/asistente.png'

export default function Onboarding() {
  const navigate = useNavigate();
  // const {
  //   // formState: { errors },
  // } = useForm();

  return (
<div>
  <section className="bg-gray-50 dark:bg-gray-900 h-screen rounded">
    <div className='my-8'>
      <h1 className="py-3 font-bold leading-tight tracking-tight text-gray-900 md:text-5xl text-2xl dark:text-white md:py-8 md:my-14">
        Bienvenido a Me sumo
      </h1>
      <h3 className="text-m font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white md:my-6">
        Primero Elegi tu Rol
      </h3>
    </div>
    <div className="flex flex-col md:flex-row md:p-4 md:space-y-0 md:space-x-4 sm:p-8">
      <div className="cursor-pointer bg-white rounded-lg shadow dark:border md:mt-0 md:flex-1 dark:bg-gray-800 dark:border-gray-700 mb-4 md:mb-0 m-4">
        <button className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Quiero Organizar un Evento
        </button>
        <div onClick={() => navigate("/home")} className="flex justify-center p-2">
          <img src={organizador} alt="" className="w-7/12 h-auto rounded" />
        </div>
      </div>
      <div className="cursor-pointer m-4 bg-white rounded-lg shadow dark:border md:mt-0 md:flex-1 dark:bg-gray-800 dark:border-gray-700">
        <button className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Quiero Participar de un evento
        </button>
        <div onClick={() => navigate("/home")} className="flex justify-center p-2">
          <img src={asistente} alt="" className="w-7/12 h-auto rounded" />
        </div>
      </div>
    </div>
  </section>
</div>

  );
}
