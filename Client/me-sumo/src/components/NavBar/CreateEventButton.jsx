import { useNavigate } from "react-router-dom";

export default function CreateEventButton() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/create-event")}
      className="bg-orange-600 w-28 h-9 rounded-xl text-gray-50"
    >
      Crear Evento
    </button>
  );
}
