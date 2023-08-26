import { useState } from "react";
import axios from "axios";
import { API_URL_ORGANIZATOR } from "../Config/api";

const useCharacters = () => {
  const [organizator, setOrganizator] = useState([]);

  const onSearch = async (name) => {
    try {
      const result = await axios(`${API_URL_ORGANIZATOR}${name}`);

      if (result.data.name) {
        setOrganizator((prevOrganizators) => [
          ...prevOrganizators,
          result.data,
        ]);
      }
    } catch (error) {
      console.log(error);
      window.alert("No existe un organizador con ese Nombre");
    }
  };

  return {
    onSearch,
    organizator,
  };
};

export default useCharacters;
