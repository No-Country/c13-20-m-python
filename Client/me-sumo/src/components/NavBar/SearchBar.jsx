import { useState } from "react";
import { getEvents } from "../../redux/sliceEvents";
import { useSelector } from "react-redux";
import "material-symbols";

//eslint-disable-next-line
export default function SearchBar({ onSearch }) {
  const [location, setLocation] = useState("");

  const cities = useSelector(getEvents);

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(location);
    setLocation("");
  };

  return (
    <div className='flex justify-center'>
      <div className='flex border-solid border-gray-600 w-full sm:w-4/5'>
        <input
          type='search'
          onChange={handleChange}
          value={location}
          list={location.length >= 1 ? 'cities' : null}
          placeholder='Busca los eventos mas cercanos'
          className='h-10 p-2 border-solid border-gray-600 shadow appearance-none w-full sm:w-4/5'
        />

        {cities.length ? (
          <datalist id='cities'>
            {cities.map((city, index) => (
              <option
                key={index}
                value={city.location}
                style={{
                  backgroundColor: '#dd4b39',
                  color: '#fff',
                  WebkitAppearance: 'none',
                  MozAppearance: 'none',
                  appearance: 'none',
                }}
              />
            ))}
          </datalist>
        ) : null}

        <button onClick={handleSearch} className='material-symbols-outlined h-10 w-auto ml-1 text-3xl '>
          Search
        </button>
      </div>
    </div>
  );
}
