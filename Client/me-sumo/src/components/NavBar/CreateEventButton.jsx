import { useNavigate } from "react-router-dom";
import { getId } from "../../redux/sliceLogin";
import { useSelector } from "react-redux";

export default function CreateEventButton() {
  const navigate = useNavigate();

  const id = useSelector(getId);

  const handleClick = () => {
    navigate("/create-event");
  };
  return (
    <div>
      {id && (
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
