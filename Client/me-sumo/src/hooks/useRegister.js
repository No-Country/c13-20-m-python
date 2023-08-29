import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL_REGISTER } from "../config/api";

const useRegister = () => {
  const [isRegister, setIsRegister] = useState(false);

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
        const { user } = data;
        if (user) {
          setIsRegister(true);
          navigate("/login");
        }
      })
      .catch((error) => {
        if (error.response) {
          console.log("Response Data:", error.response.data);
        }
      });
  };

  return {
    isRegister,
    handleRegister,
  };
};

export default useRegister;
