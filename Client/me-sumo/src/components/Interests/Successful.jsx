import React from 'react';
import { useNavigate } from "react-router-dom";
import { BiSolidCheckCircle } from "react-icons/bi";
import { Button, Typography } from "@material-tailwind/react";

const ScreenLoadedSuccessful = () => {
  const navigate = useNavigate();

  const handleGoToHome = () => {
    navigate("/home"); 
  };

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <BiSolidCheckCircle className="text-black-900 text-9xl mb-2" /> {/* Icono */}
      <Typography variant="h4" font="poppins" weight="semibold" className="mt-10 mb-2 text-sm">
      ¡Tus intereses fueron cargados con éxito!
      </Typography>
      <Button
        color="black"
        buttonType="filled"
        size="regular"
        rounded={false}
        ripple="light"
        className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 active:bg-gray-900 mt-10"
        onClick={handleGoToHome}
      >
        Ir al Home
      </Button>
    </div>
  );
};

export default ScreenLoadedSuccessful;
;

