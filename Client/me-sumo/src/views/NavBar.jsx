import SearchBar from "../components/NavBar/SearchBar";
import logo from "../assets/nuestro-logo.png";
import useOrganizator from "../hooks/useOrganizator";
import Buttons from "../components/NavBar/Buttons";

export default function NavBar() {
  const { onSearch } = useOrganizator();

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
