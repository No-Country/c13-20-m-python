import "./App.css";
import { Provider } from "react-redux";
import { store } from "../src/redux/store";
import { Route, Routes } from "react-router-dom";
import {useLocation} from "react-router-dom"

import LoginForm from "./views/LoginForm";
import Home from "./views/Home";
import SignUp from "./views/SignUp";
import NavBar from "./views/NavBar";
import UserProfile from "./views/UserProfile";
import CreateEvent from "./views/CreateEvent";
import Onboarding from "./views/OnBoarding";
function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <Provider store={store}>
      <div className="w-full">
        {!isLoginPage && <NavBar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/welcome" element={<Onboarding />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/create-event" element={<CreateEvent />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
