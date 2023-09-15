import React from 'react';
import { useNavigate } from "react-router-dom";
import useInterestSelector from '../../hooks/useInterestSelector';
import { BiSolidCheckCircle } from "react-icons/bi";
import { Button, Typography } from "@material-tailwind/react";

// El componente representa una pantalla que se muestra cuando los intereses se han cargado exitosamente.
const ScreenLoadedSuccessful = () => {
  // Obtenemos la función `navigate` de `react-router-dom`, que se utilizará para la navegación.
  const navigate = useNavigate();

    // Función para manejar el evento de hacer clic en el botón "Volver".
    const handlePrevtInterests2 = () => {
      // Navegamos a la ruta "/interests2" cuando se hace clic en el botón.
      navigate("/interests2"); 
    };
  

  // Función para manejar el evento de hacer clic en el botón "Ir al Home".
  const handleGoToHome = () => {
    // Navegamos a la ruta "/home" cuando se hace clic en el botón.
    navigate("/home"); 
  };


  const {
    searchedLocations,
    selectedInterests,
  } = useInterestSelector();


  return (
    <div className="flex flex-col items-center justify-center mt-20">
      {/* Icono de marca de verificación */}
      <BiSolidCheckCircle className="text-green-900 w-[250px] h-[250px] mb-2" />

      {/* Texto informativo */}
      <Typography  className="mt-10 mb-2 [font-family:'Lato-Bold',Helvetica] font-bold text-[#003049] text-[32px]">
        ¡Tus intereses fueron cargados con éxito!
      </Typography>

      {/* Botón */}
      <div className="justify-end space-x-2 mt-4">
      <Button
   
        buttonType="filled"
        size="regular"
        rounded={false}
        ripple="light"
        className="border-[#003049] text-white bg-[#003049] mt-10"
        onClick={handlePrevtInterests2 }
      >
        Anterior
      </Button>


      <Button
        color="black"
        buttonType="filled"
        size="regular"
        rounded={false}
        ripple="light"
        className="bg-[#f77f00] hover:bg-orange-900 active:bg-orange-300 mt-10"
        onClick={handleGoToHome}
      >
        Ir al Home
      </Button>
    </div>
    </div>
  
  );
};

export default ScreenLoadedSuccessful;


