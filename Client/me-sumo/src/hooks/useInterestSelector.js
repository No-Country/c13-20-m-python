import { useState } from 'react';

const useInterestSelector = (interests) => { 
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [currentInterestIndex, setCurrentInterestIndex] = useState(0);
  const [showAlert, setShowAlert] = useState(false); // Estado para mostrar la alerta

  const toggleInterest = (interest) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter(item => item !== interest));
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

  const handleNextButtonClick = () => {
    if (selectedInterests.length === 0) {
      // Mostrar la alerta si no hay intereses seleccionados
      setShowAlert(true);
    } else {
      // Navegar al siguiente paso
      // Agrega aquí la lógica para navegar al siguiente paso
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
  };
};

export default useInterestSelector;

