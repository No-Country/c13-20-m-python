import React from 'react';
import useInterestSelector from '../hooks/useInterestSelector';
import InterestSelector from '../components/InterestSelector';

const interests = [
  {
    name: 'Deportes',
    types: ['Fútbol', 'Baloncesto', 'Tenis', 'Atletismo', 'Hockey', 'Rugby','Padel', 'Voley', 'Running', 'Lucha y artes marciales', 'Otros' ],
  },
  
  // Agrega más intereses aquí con sus tipos correspondientes
];


const InterestsPage = () => {
    const { selectedInterests, toggleInterest } = useInterestSelector(interests);
  
    return (
      <div className="flex">
        {interests.map((interest, index) => (
          <div className="w-2/8 mr-4" key={index}>
            <InterestSelector
              title={interest.name}
              types={interest.types}
              selectedInterests={selectedInterests}
              toggleInterest={toggleInterest}
            />
          </div>
        ))}
      </div>
    );
  };
  
  export default InterestsPage;










