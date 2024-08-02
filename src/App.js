import logo from './logo.svg';
import './App.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Coding } from "./components/Coding";
import { Baking } from "./components/Baking";
import { Art } from "./components/Art";
import { Vlogger } from "./components/Vlogger";
import { Education } from "./components/Education";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Coding/>
      <Baking/>
      <Art/>
      <Vlogger/>
      <Education/>
    </div>
  );
}

export default App;
