import { useState } from "react";
import "material-symbols";

//eslint-disable-next-line
export default function SearchBar({ onSearch }) {
  const [location, setLocation] = useState("");

  const cities = [
    "Tandil, Buenos Aires",
    "Olavarria",
    "Rosario",
    "Buenos Aires",
    "Tucuman",
  ];

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(location);
    setLocation("");
  };

  return (
    <div className="flex">
      <div className="flex border-solid border-gray-600">
        <input
          type="search"
          onChange={handleChange}
          value={location}
          list={location.length >= 3 ? "cities" : null}
          placeholder="Busca los eventos mas cercanos"
          className="w-96 h-10 p-2 border-solid border-gray-600 shadow appearance-none"
        />

        <datalist id="cities" className=" appearance-none bg-deep-orange-800">
          {cities.map((city, index) => (
            <option key={index} value={city} className="bg-deep-orange-700" />
          ))}
        </datalist>

        <button
          onClick={handleSearch}
          className="material-symbols-outlined h-10 w-auto ml-1 text-3xl "
        >
          Search
        </button>
      </div>
    </div>
  );
}
