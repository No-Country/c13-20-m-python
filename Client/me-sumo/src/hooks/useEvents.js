// import { useSelector } from "react-redux";
import axios from "axios";
import { API_URL_EVENTS } from "../config/api";
import { getToken } from "../redux/sliceLogin";

const handleCreateEvent = async (newEvent, user) => {
  const URL = API_URL_EVENTS;

  const token = getToken(user);
  console.log("token", token);
  // eslint-disable-next-line no-unused-vars
  const axiosConfig = {
    headers: {
      acccess: `Bearer ${token}`,
    },
  };
  try {
    const { data } = await axios.post(URL, newEvent);
    console.log(data);
  } catch (error) {
    if (error.response) {
      console.log("tkn", token);
      alert("error!");
      console.log("Response Data:", error.response.data);
    }
  }
};
export default handleCreateEvent;
