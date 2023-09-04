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
import CreateEvent from "./views/CreateEvent";
import Onboarding from "./views/OnBoarding";
import Interests1 from "./views/Interests/Interests1";
import Interests2 from "./views/Interests/Interests2";
import Successful from "./components/Interests/Successful";
import Event from "./views/Event";

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <Provider store={store}>
      <div className='w-full'>
        {!isLoginPage && <NavBar />}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/on-boarding' element={<Onboarding />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/user-profile' element={<UserProfile />} />
          <Route path='/create-event' element={<CreateEvent />} />
          <Route path='/interests1' element={<Interests1 />} />
          <Route path='/interests2' element={<Interests2 />} />
          <Route path='/successful' element={<Successful />} />
          <Route path='/event' element={<Event />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
