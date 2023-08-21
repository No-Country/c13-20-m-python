import "./App.css";
import { Provider } from "react-redux";
import { store } from "../src/redux/store";
import Landing from "../src/views/Landing";

function App() {
  return (
    <Provider store={store}>
      <Landing />
    </Provider>
  );
}

export default App;
