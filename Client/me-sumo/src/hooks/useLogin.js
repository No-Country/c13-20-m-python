// archivo para la lógica del login de usuarios
// archivo para la lógica del login de usuarios
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL_LOGIN } from "../Config/api";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import loginSchema from "../validations/login";

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

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: joiResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return {
    isLogin,
    handleLogin,
    handlePassword,
    showPassword,
    register,
    handleSubmit,
    setValue,
    errors,
  };
};

export default useLogin;
