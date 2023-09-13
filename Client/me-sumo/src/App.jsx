import "./App.css";
import { Provider } from "react-redux";
import { store } from "../src/redux/store";
import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";

import LoginForm from "./views/LoginForm";
import Home from "./views/Home";
import SignUp from "./views/SignUp";
import NavBar from "./views/NavBar";
import UserProfile from "./views/UserProfile";
import CreateEvent from "./views/CreateEvent/CreateEvent";
import CreateEventStep3 from "./views/CreateEvent/CreateEventStep3";
import Onboarding from "./views/OnBoarding";
import Interests1 from "./views/Interests/Interests1";
import Interests2 from "./views/Interests/Interests2";
import Successful from "./views/Interests/Successful";
import FilteredEventsView from "./views/FilteredEventsView";
import CreateEventStep2 from "./views/CreateEvent/CreateEventStep2";
import EventInformation from "./views/EventInformation";
import TicketStepOne from "./views/EventTicket/TicketStepOne";
import TicketStepTwo from "./views/EventTicket/TicketStepTwo";
import TicketStepTree from "./views/EventTicket/TicketStepTree";

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <Provider className="bg-orange-50	" store={store}>
      <div className="w-full bg-orange-50		">
        {!isLoginPage && <NavBar />}
        <Routes>
          Front/Interests
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/filtered-events" element={<FilteredEventsView />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/on-boarding" element={<Onboarding />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/create-event" element={<CreateEvent />} />
          <Route path="/create-event-step2" element={<CreateEventStep2 />} />
          <Route path="/create-event-step3" element={<CreateEventStep3 />} />
          <Route path="/interests1" element={<Interests1 />} />
          <Route path="/interests2" element={<Interests2 />} />
          <Route path="/successful" element={<Successful />} />
          <Route path="/event/:pk" element={<EventInformation />} />
          <Route path="/ticketsStepOne" element={<TicketStepOne />} />
          <Route path="/ticketsStepTwo" element={<TicketStepTwo />} />
          <Route path="/ticketsStepTree" element={<TicketStepTree />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
