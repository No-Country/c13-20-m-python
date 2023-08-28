import { useState } from "react";
import "material-symbols";

//eslint-disable-next-line
export default function SearchBar({ onSearch }) {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(name);
    setName("");
  };

  return (
    <div className="flex">
      <div>
        <select className="select select-bordered join-item text-center h-10 shadow">
          <option>Eventos</option>
          <option>Organizadores</option>
        </select>
      </div>
      <div className="flex border-solid border-gray-600">
        <input
          type="search"
          onChange={handleChange}
          placeholder="Ingresa Nombre"
          className="w-96 h-10 p-2 border-solid border-gray-600 shadow"
        />
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
