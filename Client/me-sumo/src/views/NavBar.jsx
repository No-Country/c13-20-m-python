import { useNavigate } from "react-router-dom";
import SearchBar from "../components/NavBar/SearchBar";
import logo from "../../images/MeSumo.svg";
import useSearch from "../hooks/useSearch";
import Buttons from "../components/NavBar/Buttons";

export default function NavBar() {
  const { onSearch } = useSearch();
  const navigate = useNavigate();
  function useToHome() {
    const result = window.confirm("¿Quiere volver a la pagina de incio?");
    if (result) {
      navigate("/");
    }
  }
  return (
    <div className="flex flex-col bg-primary-700 pt-9 pb-10">
      <div className="flex flex-col items-center mb-5 md:flex-row justify-around">
        <img
          src={logo}
          alt="img-login"
          className="h-12 w-25 -ml-16 mr-28 mb-2 cursor-pointer"
          onClick={useToHome}
        />
        <Buttons />
      </div>

      <SearchBar onSearch={onSearch} />
    </div>
  );
}
