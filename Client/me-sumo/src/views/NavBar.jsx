import { useNavigate } from "react-router-dom";
import SearchBar from "../components/NavBar/SearchBar";
import logo from "../assets/nuestro-logo.png";
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
    <div className='flex flex-col'>
      <div className='flex justify-around items-center mb-5'>
        <img src={logo} alt='img-login' className='h-12 w-25 ml-2 mr-2 rounded-2xl' onClick={useToHome} />
        <Buttons />
      </div>
      <SearchBar onSearch={onSearch} />
    </div>
  );
}
