import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL_LOGIN } from "../config/api";
import { useSelector, useDispatch } from "react-redux";
import {
  login,
  logout,
  isLogged,
  setAuthToken,
  setAuthId,
} from "../redux/sliceLogin";

const useLogin = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  //eslint-disable-next-line
  const isLogin = useSelector(isLogged);
  const dispatch = useDispatch();

  const redirectLogin = (navigate) => {
    navigate("/home");
  };

  const handleLogin = async (userData) => {
    const { email, password } = userData;
    const URL = API_URL_LOGIN;

    try {
      const { data } = await axios.post(URL, {
        email: email,
        password: password,
      });
      const { message, token, id } = data;

      if (message === "successful login" && token && id) {
        dispatch(setAuthToken(token));
        dispatch(setAuthId(id));
        dispatch(login());
        redirectLogin(navigate);
      }
    } catch (error) {
      dispatch(logout());
      if (error.response) {
        alert("Password Incorrecto");
        console.log("Response Data:", error.response.data);
      }
    }
  };

  const handleGoogleLogin = (response) => {
    console.log(response);
    if (response.credential) {
      dispatch(setAuthToken(response.credential));
      dispatch(setAuthId(999));
      dispatch(login());
      redirectLogin(navigate);
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    alert("Te deslogueaste correctamente");
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return {
    handleLogin,
    handleLogout,
    handleGoogleLogin,
    handleOpenModal,
    handleCloseModal,
    isModalOpen,
  };
};

export default useLogin;
