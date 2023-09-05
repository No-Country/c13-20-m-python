// import { useSelector } from "react-redux";
import axios from "axios";
import { API_URL_EVENTS } from "../config/api";
const handleCreateEvent = async (newEvent, token) => {
  const URL = API_URL_EVENTS;

  console.log("token", token);
  // eslint-disable-next-line no-unused-vars
  const axiosConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const { data } = await axios.post(URL, axiosConfig, newEvent);
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
