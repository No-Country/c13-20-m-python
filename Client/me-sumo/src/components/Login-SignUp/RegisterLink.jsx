import { useNavigate } from "react-router-dom";

export default function RegisterLink() {
  const navigate = useNavigate();
  return (
    <div>
      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        No tenés cuenta?{" "}
        <a
          onClick={() => navigate("/sign-up")}
          className="font-medium text-primary-600 hover:underline dark:text-primary-500 cursor-pointer"
        >
          Registrate
        </a>
      </p>
    </div>
  );
}
