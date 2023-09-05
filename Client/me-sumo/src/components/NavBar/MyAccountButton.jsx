import userIcon from "../../assets/user-icon.png";
//import { useNavigate } from "react-router-dom";
import useEvens from "../../hooks/useEvents";

export default function MyAccountButton() {
  //const navigate = useNavigate();
  const { handleEventsLocations } = useEvens();
  return (
    <button
      onClick={handleEventsLocations}
      className="w-9 h-9 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
    >
      <img
        src={userIcon}
        className="w-9 h-9 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
      />
    </button>
  );
}
