import React from 'react';
import { Typography, Alert, Button } from "@material-tailwind/react";
import useInterestSelector from "../../hooks/useInterestSelector";

import { MdOutlineSportsBasketball, MdRestaurant, MdSportsEsports } from "react-icons/md";
import { PiMusicNotesFill } from "react-icons/pi";
import { IoSchoolSharp } from "react-icons/io5";
import { BiSolidMovie, BiDuplicate } from "react-icons/bi";
import { FaPalette } from "react-icons/fa";
import { MdTheaterComedy } from "react-icons/md";
import { MdScience } from "react-icons/md";
import { GiHealthNormal } from "react-icons/gi";
import { AiFillSignal } from "react-icons/ai";

const interests = [
  { nombre: "Deportes", categoria: "Deportes" },
  { nombre: "Gastronomía", categoria: "Gastronomía" },
  { nombre: "Negocios", categoria: "Negocios" },
  { nombre: "Música", categoria: "Música" },
  { nombre: "E-sports", categoria: "E-sports" },
  { nombre: "Cursos y Capacitaciones", categoria: "Cursos y Capacitaciones" },
  { nombre: "Cine", categoria: "Cine" },
  { nombre: "Arte", categoria: "Arte" },
  { nombre: "Teatro", categoria: "Teatro" },
  { nombre: "Ciencia y Tecnología", categoria: "Ciencia y Tecnología" },
  { nombre: "Salud", categoria: "Salud" },
  { nombre: "Otros", categoria: "Otros" },
];

const categoryIcons = {
  Deportes: MdOutlineSportsBasketball,
  Gastronomía: MdRestaurant,
  Negocios: AiFillSignal,
  Música: PiMusicNotesFill,
  "E-sports": MdSportsEsports,
  "Cursos y Capacitaciones": IoSchoolSharp,
  Cine: BiSolidMovie,
  Arte: FaPalette,
  Teatro: MdTheaterComedy,
  "Ciencia y Tecnología": MdScience,
  Salud: GiHealthNormal,
  Otros: BiDuplicate,
};

const InterestsPage = () => {
  const {
    selectedInterests,
    toggleInterest,
    showAlert,
    handleNextButtonClick,
    handlePrevButtonClick,
  } = useInterestSelector(interests);

  

  const progressBarWidth = '50%';

  return (
    <div>
      {showAlert && (
        <div className="flex justify-center items-center h-full">
          <Alert color="red" className="w-2/5">
            <Typography variant="small" font="poppins">
              Por favor selecciona al menos un interés.
            </Typography>
          </Alert>
        </div>
      )}

      <div className="w-2/8 mb-4">
        <div className='w-1440 h-1024 mx-auto p-4'>
          <div className="flex justify-between items-center"></div>
          <div className='mt-2 mb-4 text-left'>
            <Typography className=" mt-7 mb-7  pt-0 font-bold text-[#003049] text-[48px] md:text-4xl text-2xl">
              Paso 2: Intereses
            </Typography>

            <div className="w-full bg-neutral-200 dark:bg-neutral-600">
              <div className="bg-orange-800 p-1.5 text-center text-xs font-medium leading-none text-primary-100 rounded-full"
                style={{ width: progressBarWidth }}
              ></div>
            </div>

            <Typography className="mt-7 text-base md:text-base font-normal text-[#003049]">
              Selecciona los tipos de eventos que te gustaría ver:
            </Typography>

            <div className="blockg rounded-lg bg-secondary-400 mt-10 mr-20">
              <ul className="text-xs grid w-full gap-10 md:grid-cols-4">
                {interests.map((interest, index) => {
                  const Icon = categoryIcons[interest.categoria];

                  return (
                    <li
                      key={index}
                      className={`p-2 border border-gray-400 rounded-lg cursor-pointer hover:bg-[#FDE5CC] ${
                        selectedInterests.includes(interest.nombre) ? 'bg-[#FDE5CC] border-none text-white' : ''
                      }`}
                      onClick={() => toggleInterest(interest.nombre)}
                    >
                      <div className="flex items-center gap-[16px] px-[16px] ">
                        {Icon && <Icon className="h-5 w-5 mr-2 text-[#003049]" />}
                        <Typography className="text-sm [font-family:'Lato-ExtraBold',_Helvetica] text-[#003049]">
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

      <div className="mt-8 md:mr-24 flex justify-end space-x-2">
        <Button
          onClick={handlePrevButtonClick}
          className="border-[#003049] text-white bg-[#003049]"
        >
          Anterior
        </Button>
        <Button
          buttonType="filled"
          size="small"
          rounded
          block={false}
          ripple="light"
          onClick={handleNextButtonClick}
          className="bg-[#f77f00] hover:bg-orange-900 active:bg-orange-300"
        >
          Finalizar y guardar
        </Button>
      </div>
    </div>
  );
};

export default InterestsPage;


