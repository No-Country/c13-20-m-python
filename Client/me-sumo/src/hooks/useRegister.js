import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL_REGISTER } from "../config/api";
import { useDispatch } from "react-redux";
import { login, setAuthToken } from "../redux/sliceLogin";

const useRegister = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleRegister = async (userData) => {
    const { name, lastName, userName, email, password, confirmPassword } =
      userData;

    const URL = API_URL_REGISTER;

    if (password !== confirmPassword)
      return alert("Los password deben ser Iguales");

    await axios
      .post(URL, {
        first_name: name,
        last_name: lastName,
        email: email,
        username: userName,
        password: password,
      })
      .then(({ data }) => {
        const { user, token } = data;

        if (user && token) {
          dispatch(setAuthToken(token));
          dispatch(login());
          navigate("/on-boarding");
        }
      })
      .catch((error) => {
        if (error.response) {
          console.log("Response Data:", error.response.data);
        }
      });
  };

  return {
    handleRegister,
  };
};

export default useRegister;
