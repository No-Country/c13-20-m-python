import SearchBar from "../components/NavBar/SearchBar";
import logo from "../assets/nuestro-logo.png";
import useSearch from "../hooks/useSearch";
import Buttons from "../components/NavBar/Buttons";

export default function NavBar() {
  const { onSearch } = useSearch();

  return (
    <div className="flex justify-between">
      <img
        src={logo}
        alt="img-login"
        className="h-auto ml-2 mr-2 rounded-2xl"
      />
      <SearchBar onSearch={onSearch} />
      <Buttons />
    </div>
  );
}