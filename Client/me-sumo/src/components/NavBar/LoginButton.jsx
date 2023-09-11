import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { isLogged } from "../../redux/sliceLogin";
import useLogin from "../../hooks/useLogin";

export default function LoginButton() {
  const login = useSelector(isLogged);
  const navigate = useNavigate();
  const { handleLogout } = useLogin();

  const handleClick = () => {
    login ? handleLogout() : navigate("/login");
  };

  return (
    <button
      onClick={handleClick}
      className="bg-orange-600 w-28 h-9 rounded-xl text-gray-50 -ml-9 sm:ml-0"
    >
      {login ? "Logout" : "Login"}
    </button>
  );
}
