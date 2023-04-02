import "./styles/App.scss";
import Navigator from "./components/Navigation";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/js/all.min.js";
import { Route, Switch } from "react-router-dom";
import SignInPage from "./components/SignInPage";
import MoviesPage from "./components/MoviesPage/MoviesPage";

function App() {
  return (
    <Switch>
      {" "}
      <Route exact path="/CinemaZone/">
        {" "}
        <Navigator />{" "}
      </Route>{" "}
      <Route path="/sign-in">
        {" "}
        <SignInPage />{" "}
      </Route>{" "}
      <Route exact path="/movies">
        {" "}
        <MoviesPage />{" "}
      </Route>{" "}
    </Switch>
  );
}

export default App;
