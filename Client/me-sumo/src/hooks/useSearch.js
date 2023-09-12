import { useState } from "react";
import axios from "axios";
import { API_URL_EVENTS } from "../config/api";
import { useNavigate } from "react-router-dom";
import {
  setFilteredEvents,
  setFilteredEventsCategories,
} from "../redux/sliceEvents";
import { useDispatch } from "react-redux";

const useSearchEvents = () => {
  const [searchedLocation, setSearchedLocation] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const redirect = (navigate) => {
    navigate("/filtered-events");
  };

  const onSearch = async (searchLocation) => {
    try {
      const response = await axios(API_URL_EVENTS);

      const { data } = response;

      const filterEvents = data.filter(
        (evnt) => evnt.location === searchLocation
      );

      const filteredCategories = filterEvents
        .map((evnt) => evnt.categories)
        .flat()
        .reduce((uniqueCategories, category) => {
          if (!uniqueCategories.some((cat) => cat.id === category.id)) {
            uniqueCategories.push(category);
          }
          return uniqueCategories;
        }, []);

      dispatch(setFilteredEventsCategories(filteredCategories));
      dispatch(setFilteredEvents(filterEvents));
      setSearchedLocation(searchLocation);

      redirect(navigate);
    } catch (error) {
      console.log(error);
      window.alert("No existen eventos en esa localidad");
    }
  };

  return {
    onSearch,
    searchedLocation,
  };
};
export default useSearchEvents;
