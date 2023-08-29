import { useState } from 'react';

const useInterestSelector = (interests) => { 
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [currentInterestIndex, setCurrentInterestIndex] = useState(0);

  const toggleInterest = (interest) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter(item => item !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
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

  return {
    selectedInterests,
    toggleInterest,
    currentInterestIndex,
    goToPreviousInterest,
    goToNextInterest,
  };
};

export default useInterestSelector;
