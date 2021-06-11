import logo from './logo.svg';
import { CustomNavbar, Footer } from './components';
import { Home, Series, Painting } from './pages'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/:series/:painting">
            <Painting></Painting>
          </Route>
          <Route path="/:series">
            <CustomNavbar></CustomNavbar>
            <Series></Series>
            <Footer></Footer>
          </Route>
          <Route path="/">
            <Home></Home>
            <Footer></Footer>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
