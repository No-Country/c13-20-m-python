import { useState } from "react";
import { getEvents } from "../../redux/sliceEvents";
import { useSelector } from "react-redux";
import "material-symbols";

//eslint-disable-next-line
export default function SearchBar({ onSearch }) {
  const [location, setLocation] = useState("");

  const cities = useSelector(getEvents);

  const uniqueCities = Array.from(
    new Set(cities.map((city) => city.location))
  ).map((location) => cities.find((city) => city.location === location));

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(location);
    setLocation("");
  };

  return (
    <div className="flex justify-center md: mr-10 mt-5 w-full">
      <div className="flex border-solid border-primary-800 w-full md:w-4/5">
        <input
          type="search"
          onChange={handleChange}
          value={location}
          list={location.length >= 1 ? "cities" : null}
          placeholder="Busca los eventos en..."
          className="h-10 p-2 border-solid border-primary-800 border-2 rounded-xl shadow appearance-none w-full bg-transparent placeholder-primary-800"
        />

        {uniqueCities.length ? (
          <datalist id="cities">
            {uniqueCities.map((city, index) => (
              <option
                key={index}
                value={city.location}
                style={{
                  backgroundColor: "#dd4b39",
                  color: "#fff",
                  WebkitAppearance: "none",
                  MozAppearance: "none",
                  appearance: "none",
                }}
              />
            ))}
          </datalist>
        ) : null}

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
