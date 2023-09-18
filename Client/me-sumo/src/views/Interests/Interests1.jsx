import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useInterestSelector from "../../hooks/useInterestSelector";
import { Alert, Typography, Button, Input } from "@material-tailwind/react";

const Interest1 = () => {
  const { handleSubmit, register } = useForm();
  const {
    handleNextButton,
    handlePrevButton,
    setAddress,
    showAlert1,
    setShowAlert1,
  } = useInterestSelector();
  const [autocomplete, setAutocomplete] = useState(null);
  const [isLocationSelected, setIsLocationSelected] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  useEffect(() => {
    const input = document.getElementById("direccion");
    setAutocomplete(
      new window.google.maps.places.Autocomplete(input, {
        types: ["geocode"],
        fields: ["name"],
      })
    );
  }, []);

  const handleMap = () => {
    if (autocomplete) {
      let place = autocomplete.getPlace();
      if (place && place.name) {
        setAddress(place.name);
        setShowAlert1(false);
        setIsLocationSelected(true);
        setShowSuccessAlert(true);

        // Ocultar la alerta de éxito después de 3 segundos (3000 ms)
        setTimeout(() => {
          setShowSuccessAlert(false);
        }, 2000);
      } else {
        setShowAlert1(true);
        setIsLocationSelected(false);
        setShowSuccessAlert(false);
      }
    }
  };

  return (
    <div>
      {showAlert1 && (
        <div className="flex justify-center items-center h-full">
          <Alert color="red" className="w-2/5">
            <Typography variant="small" font="poppins">
              Por favor selecciona una ubicación
            </Typography>
          </Alert>
        </div>
      )}

      {showSuccessAlert && (
        <div className="flex justify-center items-center h-full">
          <Alert color="green" className="w-2/5">
            <Typography variant="small" font="poppins">
              Ubicación seleccionada con éxito
            </Typography>
          </Alert>
        </div>
      )}

      <div className="p-0 mt-5 pt-0 sm:p-2 md:mx-20">
        <div className="flex justify-between items-center"></div>
        <div className="mt-4 mb-4 text-left">
          <Typography
            className=" mt-7 mb-7  pt-0 font-bold text-[#003049] text-[48px] md:text-4xl text-2xl"
          >
            Paso 1: Ubicación
          </Typography>

          <div className="w-1/2 bg-orange-200 dark:bg-orange-300 rounded-full">
            <div
              className="bg-orange-800 p-1.5 text-center text-xs font-medium leading-none text-primary-100 rounded-full"
              style={{ width: "50%" }}
            ></div>
          </div>

          <Typography className="mt-7 text-base md:text-base font-normal text-[#003049]">
            Selecciona la ubicación de los eventos que te gustaría ver:
          </Typography>

          <form className="space-y-2" onSubmit={handleSubmit(handleMap)}>
            <div className="mt-8 mb-8">
              <Input
                type="text"
                id="direccion"
                name="direccion"
                placeholder="Escribe la dirección del evento"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-600 focus:border-orange-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...register("direccion")}
              />
            </div>

            <div className="mt-8 mb-8">
              <Button
                buttonType="filled"
                size="small"
                rounded
                ripple="light"
                className="bg-[#f77f00] hover:bg-orange-900 active:bg-orange-300"
                type="submit"
              >
                Seleccionar Localidad
              </Button>
            </div>
          </form>
        </div>

        <div className="flex justify-end space-x-2 mt-8">
          <Button
            onClick={handlePrevButton}
            className="border-[#003049] text-white bg-[#003049]"
          >
            Anterior
          </Button>
          <Button
            buttonType="filled"
            size="small"
            rounded
            ripple="light"
            onClick={handleNextButton}
            className="bg-[#f77f00] hover:bg-orange-900 active:bg-orange-300"
          >
            Siguiente
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Interest1;


