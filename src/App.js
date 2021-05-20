import logo from "./logo.svg";
import "./App.css";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Homescreen from "./screens/Homescreen";
import Productsdescscreen from "./screens/Productsdescscreen";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Route path="/" component={Homescreen} exact />
        <Route path="/product/:id" component={Productsdescscreen} exact />
      </BrowserRouter>
    </div>
  );
}

export default App;
