import logo from './logo.svg';
import './App.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Coding } from "./components/Coding";
import { Baking } from "./components/Baking";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Coding/>
      <Baking/>
    </div>
  );
}

export default App;
