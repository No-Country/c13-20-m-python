// archivo para la lógica del login de usuarios
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL_LOGIN } from "../Config/api";

const useLogin = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handlePassword = () => {
    if (!showPassword) {
      setShowPassword(true);
    } else {
      setShowPassword(false);
    }
  };

  const handleLogin = (userData) => {
    const { email, password } = userData;
    const URL = API_URL_LOGIN;

    axios
      .post(URL, {
        email: email,
        password: password,
      })
      .then(({ data }) => {
        const { access } = data;
        if (access) {
          setIsLogin(true);
          navigate("/home");
        }
      });
  };

  return {
    isLogin,
    handleLogin,
    handlePassword,
    showPassword,
  };
};

export default useLogin;
