import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL_LOGIN } from "../Config/api";
import { useSelector, useDispatch } from "react-redux";
import { login, logout, isLogged } from "../redux/sliceLogin";

const useLogin = () => {
  const navigate = useNavigate();

  const isLogin = useSelector(isLogged);
  const dispatch = useDispatch();

  console.log(isLogin);

  useEffect(() => {
    if (isLogin) {
      navigate("/home");
    }
  }, [isLogin, navigate]);

  const handleLogin = async (userData) => {
    const { email, password } = userData;
    const URL = API_URL_LOGIN;

    try {
      const { data } = await axios.post(URL, {
        email: email,
        password: password,
      });
      const { message } = data;
      console.log(message);
      if (message === "successful login") {
        console.log(message);
        dispatch(login());
      }
    } catch (error) {
      dispatch(logout());
      if (error.response) {
        alert("Password Incorrecto");
        console.log("Response Data:", error.response.data);
      }
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    alert("Te deslogueaste correctamente");
  };

  return {
    handleLogin,
    handleLogout,
  };
};

export default useLogin;
