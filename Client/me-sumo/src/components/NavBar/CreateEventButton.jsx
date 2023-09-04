import { useNavigate } from "react-router-dom";

export default function CreateEventButton() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/create-event");
  };
  return (
    <button
      onClick={handleClick}
      className="bg-orange-600 w-28 h-9 rounded-xl text-gray-50"
    >
      Crear Evento
    </button>
  );
}
