import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import SearchBar from "../components/NavBar/SearchBar";
import Buttons from "../components/NavBar/Buttons";
import logo from "../../images/MeSumo.svg";
import useSearch from "../hooks/useSearch";

export default function NavBar() {
  const { onSearch } = useSearch();
  const navigate = useNavigate();
  const [showButtons, setShowButtons] = useState(false);

  function useToHome() {
    navigate("/");
  }

  function toggleButtons() {
    setShowButtons(!showButtons);
  }

  return (
    <div className="flex flex-col bg-primary-700 pt-9 pb-10">
      <div className="flex flex-col items-center mb-5 md:flex-row justify-around">
        <img
          src={logo}
          alt="img-login"
          className="h-12 w-25 mt-3 ml-12 cursor-pointer md: mr-14"
          onClick={useToHome}
        />

        <div className="flex w-full flex-col md:flex-row pl-5 pr-5 ml-12 items-center">
          <SearchBar onSearch={onSearch} />
          <button
            className="md:hidden text-3xl text-primary-800 absolute right-7 mt-20"
            onClick={toggleButtons}
          >
            <GiHamburgerMenu />
          </button>
        </div>
        <div
          className={`${
            showButtons ? "flex" : "hidden"
          } md:flex items-center mt-5`}
        >
          <Buttons />
        </div>
      </div>
    </div>
  );
}
