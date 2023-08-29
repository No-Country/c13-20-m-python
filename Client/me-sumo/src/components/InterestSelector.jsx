import React from 'react';

const InterestSelector = ({ title, types, selectedInterests, toggleInterest }) => {
  return (
    <div className="flex">
      {/* Lado izquierdo */}
      <div className="w-2/8 p-4 flex flex-col justify-center bg-primary">
        <h1 className="text-3xl font-semibold mb-4">SUMATE</h1>
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
      </div>

      {/* Lado derecho */}
      <div className="w-6/8 p-4">
        <div className="block rounded-lg bg-secondary-400 p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
          <h3 className="text-l font-semibold mb-4">{title}</h3>
          <ul className="grid w-full gap-6 md:grid-cols-3">
            {types.map((type, index) => (
              <li
                key={index}
                className={`inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-800 ${selectedInterests.includes(type) ? 'peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700' : ''}`}
                onClick={() => toggleInterest(type)}
              >
                <div className="block">
                  <input
                    type="checkbox"
                    id={`${title}-${index}`}
                    value=""
                    className="hidden peer"
                    checked={selectedInterests.includes(type)}
                    onChange={() => {}}
                  />
                  <label
                    htmlFor={`${title}-${index}`}
                    className="inline-flex items-center justify-between w-full"
                  >
                    <div className="w-full text-xs font-semibold">{type}</div>
                  </label>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4 flex justify-end">
          <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
            Atrás
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};

export default InterestSelector;











