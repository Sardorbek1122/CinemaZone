import "./styles/App.scss";
import Navigator from "./components/Navigation";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/js/all.min.js";
import { Route, Routes} from "react-router-dom";
import SingInPage from "./components/SignInPage";

function App() {
  return (
      <Routes>
        <Route path="/" element={
          <Navigator />
        }
        />

        <Route path="/sign-in" element={
          <SingInPage />
        }
        />
      </Routes>
  );
}

export default App;
