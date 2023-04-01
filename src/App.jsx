import "./styles/App.scss";
import Navigator from "./components/Navigation";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/js/all.min.js";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
          <Navigator />
      </div>
    </Router>
  );
}

export default App;
