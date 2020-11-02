import logo from './logo.svg';
import './App.css';
// import useCustom from './components/customHook';
import Searchpet1 from "./components/petwithcustomhook";
import Searchpet from "./components/pet";
import { Router, Link } from '@reach/router'
import Details from './components/Details';


function App() {
  return (
    <div className="App">
      <header>
        <Link to="/" >Adopt Me!</Link>
      </header>
      <Router>
        <Searchpet1 path="/" />
        <Details path="/details/:id" />
      </Router>
    </div>
  );
}

export default App;
