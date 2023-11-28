import logo from "./logo.svg";
import "./App.css";
import Api from "./appe/Api";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
// import { Provider } from "react-redux";
// import createStore from "./helper/store";

function App() {
  // const store = createStore();
  return (
    <>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
    </>
  );
}

export default App;
