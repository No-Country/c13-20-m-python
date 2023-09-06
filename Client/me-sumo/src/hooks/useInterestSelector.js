import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLocation, setInterests } from "../redux/sliceInterests";

/**
 * El gancho `useInterestSelector` proporciona funciones y estados para gestionar la selección de intereses
 * y navegar entre diferentes pasos en un proceso de selección de intereses.
 */
const useInterestSelector = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  /* ----------------------------------
   * PASO 1: Manejo de la Ubicacion
   * ---------------------------------- */

  // Estado para almacenar la dirección seleccionada en Interest1.
  const [address, setAddress] = useState("");

  // Estado para mostrar una alerta si no se selecciona una ubicación válida en Interest1.
  const [showAlert1, setShowAlert1] = useState(false);

  // Estado para almacenar las ubicaciones buscadas.
  const [searchedLocations, setSearchedLocations] = useState([]);

  /* Función para manejar el botón "Anterior" en Interest1. */
  const handlePrevButton = () => {
    navigate("/on-boarding");
  };

  /* Función para manejar el botón "Siguiente" en Interest1. */
  const handleNextButton = () => {
    if (address === "") {
      setShowAlert1(true);
    } else {
      dispatch(setLocation(address));
      setSearchedLocations([...searchedLocations, { name: address }]);
      navigate("/interests2");
    }
  };

  /* ----------------------------------
   * PASO 2: Manejo de la selección de intereses
   * ---------------------------------- */

  // Estado para almacenar los intereses seleccionados.
  const [selectedInterests, setSelectedInterests] = useState([]);

  // Índice del interés actual en el proceso de selección.
  const [currentInterestIndex, setCurrentInterestIndex] = useState(0);

  // Estado para mostrar una alerta si no se selecciona ningún interés.
  const [showAlert, setShowAlert] = useState(false);

  /* Función para alternar la selección de un interés. */
  const toggleInterest = (interest) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(
        selectedInterests.filter((item) => item !== interest)
      );
    } else {
      setSelectedInterests([...selectedInterests, interest]);
      setShowAlert(false);
    }
  };

  /* Función para ir al interés anterior en el proceso de selección. */
  const goToPreviousInterest = () => {
    if (currentInterestIndex > 0) {
      setCurrentInterestIndex(currentInterestIndex - 1);
    }
  };

  /* Función para ir al siguiente interés en el proceso de selección. */
  const goToNextInterest = () => {
    if (currentInterestIndex < selectedInterests.length - 1) {
      setCurrentInterestIndex(currentInterestIndex + 1);
    }
  };

  /* Función para manejar el botón "Anterior" en InterestsPage. */
  const handlePrevButtonClick = () => {
    navigate("/interests1");
  };

  /* Función para manejar el botón "Finalizar y guardar" en InterestsPage. */
  const handleNextButtonClick = () => {
    if (selectedInterests.length === 0) {
      setShowAlert(true);
    } else {
      dispatch(setInterests(selectedInterests));
      navigate("/successful");
    }
  };

  return {
    selectedInterests,
    toggleInterest,
    currentInterestIndex,
    goToPreviousInterest,
    goToNextInterest,
    showAlert,
    handleNextButtonClick,
    handlePrevButtonClick,
    handleNextButton,
    handlePrevButton,
    showAlert1,
    setShowAlert1,
    searchedLocations,
    setSearchedLocations,
    address,
    setAddress,
  };
};

export default useInterestSelector;
