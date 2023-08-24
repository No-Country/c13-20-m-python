import "./App.css";
import { Provider } from "react-redux";
import { store } from "../src/redux/store";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./views/LoginForm";
import SignUpForm from "./views/SignUpForm";
import Landing from "./views/Landing";

function App() {
  return (
    <Provider store={store}>
      <div className="w-full">
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/sign-up" element={<SignUpForm />} />
          <Route path="/home" element={<Landing />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
