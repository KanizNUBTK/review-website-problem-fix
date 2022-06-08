import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './component/Home/Home';
import NotFound from './component/NotFound/NotFound';
import About from './component/About/About';
import CampusLife from './component/CampusLife/CampusLife';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Services from './component/Services/Services';
import Details from './component/Details/Details';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/service">
            <Services></Services>
          </Route>
          <Route exact path="/details/:detailsId" >
            <Details />
          </Route>
          <Route exact path="/campusLife">
            <CampusLife></CampusLife>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
