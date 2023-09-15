import { useNavigate } from "react-router-dom";
import { isLogged } from "../../redux/sliceLogin";
import { useSelector } from "react-redux";
import { Button } from "@material-tailwind/react";
import { IoIosAddCircleOutline } from 'react-icons/io'; // Importa el icono GrAddCircle

export default function CreateEventButton() {
  const navigate = useNavigate();

  const logged = useSelector(isLogged);

  const handleClick = () => {
    navigate("/create-event");
  };

  return (
    <div>
      {logged && (
        <Button
          onClick={handleClick}
          className="flex items-center space-x-2 w-48 h-9 bg-[#f77f00] hover:bg-orange-900 active:bg-orange-300"
        >
           <IoIosAddCircleOutline className="w-6 h-6 text-white" /> 
          <span>Crear Evento</span> 
        </Button>
      )}
    </div>
  );
}

