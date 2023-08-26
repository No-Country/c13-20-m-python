import "./App.css";
import { Provider } from "react-redux";
import { store } from "../src/redux/store";
import { Route, Routes, useLocation } from "react-router-dom";
import LoginForm from "./views/LoginForm";
import SignUp from "./views/SignUp";
import Landing from "./views/Landing";
import NavBar from "./views/NavBar";

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <Provider store={store}>
      <div className="w-full">
        {!isLoginPage && <NavBar />}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
