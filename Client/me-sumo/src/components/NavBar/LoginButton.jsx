import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { isLogged } from "../../redux/sliceLogin";
import useLogin from "../../hooks/useLogin";
import { Button } from "@material-tailwind/react";


export default function LoginButton() {
  const login = useSelector(isLogged);
  const navigate = useNavigate();
  const { handleLogout } = useLogin();

  const handleClick = () => {
    login ? handleLogout() : navigate("/login");
  };

  return (
    <Button
      onClick={handleClick}
      className="w-29 h-9 md:w-29 md:h-9 flex items-center bg-[#f77f00] hover:bg-orange-900 active:bg-orange-300 -ml-9 sm:ml-0"
    >
      {login ? "Logout" : "Login"}
    </Button>
  );
}
