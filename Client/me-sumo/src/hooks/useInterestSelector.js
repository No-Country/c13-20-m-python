import { useState } from "react";
import { useNavigate } from "react-router-dom";

//eslint-disable-next-line
const useInterestSelector = (interests) => {
  const navigate = useNavigate();
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [currentInterestIndex, setCurrentInterestIndex] = useState(0);
  const [showAlert, setShowAlert] = useState(false); // Estado para mostrar la alerta

  const toggleInterest = (interest) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(
        selectedInterests.filter((item) => item !== interest)
      );
    } else {
      setSelectedInterests([...selectedInterests, interest]);
      setShowAlert(false); // Ocultar la alerta al seleccionar un interés
    }
  };

  const goToPreviousInterest = () => {
    if (currentInterestIndex > 0) {
      setCurrentInterestIndex(currentInterestIndex - 1);
    }
  };

  const goToNextInterest = () => {
    if (currentInterestIndex < selectedInterests.length - 1) {
      setCurrentInterestIndex(currentInterestIndex + 1);
    }
  };

  const handlePrevButtonClick = () => {
    navigate("/on-boarding");
  };

  const handleNextButtonClick = () => {
    if (selectedInterests.length === 0) {
      // Mostrar la alerta si no hay intereses seleccionados
      setShowAlert(true);
    } else {
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
  };
};

export default useInterestSelector;
