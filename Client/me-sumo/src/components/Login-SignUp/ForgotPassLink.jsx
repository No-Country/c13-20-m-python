import { useNavigate } from "react-router-dom";

export default function ForgotPassLink() {
  const navigate = useNavigate();
  return (
    <div>
      <a
        onClick={() => navigate("/home")}
        className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500 cursor-pointer"
      >
        Olvidé mi contraseña
      </a>
    </div>
  );
}
