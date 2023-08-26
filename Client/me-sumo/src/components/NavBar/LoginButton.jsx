import { useNavigate } from "react-router-dom";

export default function LoginButton() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/login")}
      className="bg-orange-600 w-28 h-9 rounded-xl text-gray-50"
    >
      Login
    </button>
  );
}
