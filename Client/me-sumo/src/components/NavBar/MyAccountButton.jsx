import userIcon from "../../assets/user.jpg";
import { isLogged } from "../../redux/sliceLogin";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function MyAccountButton() {
  const navigate = useNavigate();
  const logged = useSelector(isLogged);

  const handleClick = () => {
    navigate("/user-profile");
  };

  return (
    <div>
      {logged && (
        <button
          onClick={handleClick}
          className="w-9 h-9 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
        >
          <img
            src={userIcon}
            className="w-full h-full rounded-full ring ring-primary-50 ring-offset-base-100 ring-offset-2"
          />
        </button>
      )}
    </div>
  );
}
