import { useNavigate } from "react-router-dom";
import { isLogged } from "../../redux/sliceLogin";
import { useSelector } from "react-redux";

export default function CreateEventButton() {
  const navigate = useNavigate();

  const logged = useSelector(isLogged);

  const handleClick = () => {
    navigate("/create-event");
  };
  return (
    <div>
      {logged && (
        <button
          onClick={handleClick}
          className="bg-orange-600 w-28 h-9 rounded-xl text-gray-50"
        >
          Crear Evento
        </button>
      )}
    </div>
  );
}
