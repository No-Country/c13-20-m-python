// Importa las bibliotecas y componentes necesarios
import React from 'react';
import { Typography, Alert, Button } from "@material-tailwind/react";
import useInterestSelector from "../../hooks/useInterestSelector"; // Importa el gancho personalizado para gestionar la selección de intereses

// Importa iconos de React para categorías de intereses
import { MdOutlineSportsBasketball,MdRestaurant,MdSportsEsports } from "react-icons/md"; 
import { PiMusicNotesFill } from "react-icons/pi";
import { IoSchoolSharp } from "react-icons/io5";
import { BiSolidMovie, BiDuplicate } from "react-icons/bi";
import { FaPalette } from "react-icons/fa";
import { MdTheaterComedy } from "react-icons/md";
import { MdScience } from "react-icons/md";
import { GiHealthNormal } from "react-icons/gi";
import { AiFillSignal } from "react-icons/ai";


// Definición de intereses y sus categorías
const interests = [
  { nombre: "Deportes", categoria: "Deportes" },
  { nombre: "Gastronomía", categoria: "Gastronomía" }, // Corregido: "Gastronomía" en lugar de "Gastronomia"
  { nombre: "Negocios", categoria: "Negocios" },
  { nombre: "Música", categoria: "Música" }, // Corregido: "Música" en lugar de "Musica"
  { nombre: "E-sports", categoria: "E-sporst" },
  { nombre: "Cursos y Capacitaciones", categoria: "Cursos y Capacitaciones" },
  { nombre: "Cine", categoria: "Cine" },
  { nombre: "Arte", categoria: "Arte" },
  { nombre: "Teatro", categoria: "Teatro" },
  { nombre: "Ciencia y Tecnología", categoria: "Ciencia y Tecnología" }, // Corregido: "Ciencia y Tecnología" en lugar de "Ciencia y Tecnologia"
  { nombre: "Salud", categoria: "Salud" },
  { nombre: "Otros", categoria: "Otros" },
];

// Iconos asociados a categorías de intereses
const categoryIcons = {
  Deportes: MdOutlineSportsBasketball,
  Gastronomía: MdRestaurant, 
  Negocios: AiFillSignal,
  Música: PiMusicNotesFill, 
  "E-sporst": MdSportsEsports,
  "Cursos y Capacitaciones": IoSchoolSharp,
  Cine: BiSolidMovie,
  Arte: FaPalette,
  Teatro: MdTheaterComedy,
  "Ciencia y Tecnología": MdScience, 
  Salud: GiHealthNormal,
  Otros: BiDuplicate,
};


// Componente principal de la página de intereses
const InterestsPage = () => {
  // Utiliza el gancho personalizado `useInterestSelector` para gestionar la selección de intereses
  const {
    selectedInterests,
    toggleInterest,
    showAlert,
    handleNextButtonClick,
    handlePrevButtonClick,
  } = useInterestSelector(interests);

  // Define la variable progressBarWidth para la barra de progreso
  const progressBarWidth = '50%'; // Cambia el valor según tus necesidades

  return (
    <div>
      {/* Sección de Alerta que se muestra si no se seleccionan intereses */}
      {showAlert && (
        <div className="flex justify-center items-center h-full">
          <Alert color="red" className="w-2/5">
            <Typography variant="small" font="poppins">
              Por favor selecciona al menos un interés.
            </Typography>
          </Alert>
        </div>
      )}

      {/* Contenedor principal */}
      <div className="w-2/8 mb-4">
        {/* Contenido del selector de intereses */}
        <div className='w-1440 h-1024 mx-auto p-4'>
          <div className="flex justify-between items-center"></div>
          <div className='mt-2 mb-4 text-left'>

            {/* Título */}
            <Typography variant="h4" font="poppins" weight="semibold" className="mt-4 mb-2 text=sm">
              Paso 2: Intereses
            </Typography>

            {/* Barra de progreso */}
            <div className="w-full bg-neutral-200 dark:bg-neutral-600">
              <div
                className="bg-black p-1 text-center text-xs font-medium leading-none text-primary-100 rounded-full"
                style={{ width: progressBarWidth }}
              ></div>
            </div>

            {/* Descripción */}
            <Typography variant="caption" font="poppins" className="mt-4 mb-6 text-sm">
              Selecciona los tipos de eventos que te gustaría ver:
            </Typography>

            {/* Lista de intereses */}
            <div className="block rounded-lg bg-secondary-400 "
            style={{ padding: '26px 100px' ,gap: '20px', }} >
              <ul className="text-xs grid w-full gap-5 md:grid-cols-3">
                {/* Mapear y mostrar cada interés */}
                {interests.map((interest, index) => {
                  // Obtener el icono según la categoría
                  const Icon = categoryIcons[interest.categoria];

                  return (
                    <li
                      key={index}
                      className={`p-2 border border-gray-400 rounded-lg cursor-pointer hover:bg-back-100 ${
                        selectedInterests.includes(interest.nombre) ? 'bg-gray-900 text-white' : ''
                      }`}
                      onClick={() => toggleInterest(interest.nombre)}
                    >
                     <div className="flex items-center">
                        {Icon && <Icon className="h-4 w-4 mr-2" />}
                        {/* Nombre del interés */}
                        <Typography variant="paragraph" font="poppins" className="text-xs">
                          {interest.nombre}
                        </Typography>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Botones para avanzar y retroceder */}
      <div className="mt-4 flex justify-end space-x-2">
        <Button
          color="black"
          buttonType="filled"
          size="small"
          rounded
          block={false}
          ripple="light"
          onClick={handlePrevButtonClick}
          className="hover:bg-gray-900 active:bg-gray-900"
        >
          Anterior
        </Button>
        <Button
          color="black"
          buttonType="filled"
          size="small"
          rounded
          block={false}
          ripple="light"
          onClick={handleNextButtonClick}
          className="hover:bg-gray-900 active:bg-gray-900"
        >
          Finalizar y guardar
        </Button>
      </div>
    </div>
  );
};

export default InterestsPage;


