import axios from "axios";
import { getToken } from "../redux/sliceLogin";
import { useSelector } from "react-redux";

import { API_URL_USERDATA, API_URL_ORGANIZATOR } from "../config/api";

const useUserData = () => {
  const token = useSelector(getToken);

  const searchUserData = async () => {
    try {
      const { data } = await axios.get(API_URL_USERDATA, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const userEmail = data.data.email;
      const userName = data.data.first_name + " " + data.data.last_name;
      const user = data.data.username;

      return { userName, userEmail, user };
    } catch (error) {
      if (error.response) {
        alert("error!");
        console.log("Response Data:", error.response.data);
      }
    }
  };

  const searchUserEventsData = async () => {
    try {
      const { data } = await axios.get(API_URL_ORGANIZATOR, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error) {
      if (error.response) {
        alert("error!");
        console.log("Response Data:", error.response.data);
      }
    }
  };

  return { searchUserData, searchUserEventsData };
};

export default useUserData;
