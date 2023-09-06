import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useInterestSelector from "../../hooks/useInterestSelector"; // Importa el gancho personalizado para la selección de intereses
import { Alert, Typography, Button, Input } from "@material-tailwind/react"; // Importa componentes de Material Tailwind

const Interest1 = () => {
  const { handleSubmit, register } = useForm(); // Inicializa el formulario React Hook Form
  const {
    handleNextButton,
    handlePrevButton,
    setAddress, // Obtenemos la función 'setAddress' del gancho personalizado
    showAlert1,
    setShowAlert1,
  } = useInterestSelector(); // Utiliza el gancho personalizado para la selección de ubicacion

  const [autocomplete, setAutocomplete] = useState(null); // Inicializa 'autocomplete' como null

  // Efecto secundario para inicializar el autocompletar de Google Maps
  useEffect(() => {
    const input = document.getElementById("direccion"); // Obtiene el elemento de entrada por su ID
    setAutocomplete(
      new window.google.maps.places.Autocomplete(input, {
        types: ["geocode"],
        fields: ["name"],
      })
    );
  }, []);

  // Función para manejar la selección de ubicación en el mapa
  const handleMap = () => {
    if (autocomplete) {
      let place = autocomplete.getPlace(); // Obtiene los detalles del lugar seleccionado
      if (place && place.name) {
        setAddress(place.name); // Utiliza la función para actualizar 'address'

        // Oculta la alerta si se selecciona una ubicación válida
        setShowAlert1(false);
      } else {
        // Muestra la alerta si no se selecciona una ubicación válida
        setShowAlert1(true);
      }
    }
  };

  return (
    <div>
      {/* Sección de Alerta que se muestra si no se selecciona una ubicación */}
      {showAlert1 && (
        <div className="flex justify-center items-center h-full">
          <Alert color="red" className="w-2/5">
            <Typography variant="small" font="poppins">
              Por favor selecciona una ubicación
            </Typography>
          </Alert>
        </div>
      )}

      <div className="w-1440 h-1024 mx-auto p-4">
        <div className="flex justify-between items-center"></div>
        <div className="mt-2 mb-4 text-left">
          {/* Título */}
          <Typography
            variant="h4"
            font="poppins"
            weight="semibold"
            className="mt-4 mb-2 text=sm"
          >
            Paso 1: Ubicación
          </Typography>

          {/* Barra de progreso */}
          <div className="w-1/2 bg-gray-400 dark:bg-gray-600 rounded-full">
            <div
              className="bg-black p-1 text-center text-xs font-medium leading-none text-primary-100 rounded-full"
              style={{ width: "50%" }}
            ></div>
          </div>

          {/* Descripción */}
          <Typography
            variant="caption"
            font="poppins"
            className="mt-4 mb-6 text-sm"
          >
            Selecciona la ubicación de los eventos que te gustaria ver:
          </Typography>

          {/* Input de busquedad */}
          <form className="space-y-2" onSubmit={handleSubmit(handleMap)}>
            <div className="mt-8 mb-8">
              <Input
                type="text"
                id="direccion"
                name="direccion"
                placeholder="Escribe la dirección del evento"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...register("direccion")} // Registra el campo de entrada en React Hook Form
              />
            </div>

            {/* Boton seleccion de ubicacion */}
            <div className="mt-8 mb-8">
              <Button
                color="black"
                buttonType="filled"
                size="small"
                rounded
                ripple="light"
                className="hover:bg-gray-900 active:bg-gray-900"
                type="submit" // Agregado aquí para manejar la presentación del formulario
              >
                Seleccionar Localidad
              </Button>
            </div>
          </form>
        </div>

        {/* Botones */}
        <div className="flex justify-end space-x-2 mt-8">
          <Button
            color="black"
            buttonType="filled"
            size="small"
            rounded
            ripple="light"
            onClick={handlePrevButton} // Maneja el evento de clic en el botón Anterior
            className="hover:bg-gray-900 active:bg-gray-900"
          >
            Anterior
          </Button>
          <Button
            color="black"
            buttonType="filled"
            size="small"
            rounded
            ripple="light"
            onClick={handleNextButton} // Maneja el evento de clic en el botón Siguiente
            className="hover:bg-gray-900 active:bg-gray-900"
          >
            Siguiente
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Interest1;
