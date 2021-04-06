import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Admin from './components/Admin/Admin';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="App">
      <Router>
      <Header></Header>
        <Switch>
        <Route exact path="/">
        <Home></Home>
          </Route>
          <Route path="/login">
           <Login></Login>
          </Route>
          <Route path="/home">
          <Home></Home>
          </Route>
          <Route path="/admin">
          <Admin></Admin>
          </Route>
        </Switch>
      </Router>
      {/* <Header></Header> */}
     
     
    </div>
  );
}

export default App;
