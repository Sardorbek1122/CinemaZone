import "./styles/App.scss";
import Navigator from './components/Navigation';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/js/all.min.js';
import AboutSections from "./components/AboutSections/AboutSections";


function App() {
  return (
    <div className="App">
      <Navigator/>
      <AboutSections/>
    </div>
  );
}

export default App;
