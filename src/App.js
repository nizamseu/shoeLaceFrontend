import './App.css';
import ContextProvider from "./Components/ContextProvider/ContextProvider";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Header from './Components/Home/Header/Header';
import Banner from './Components/Home/Banner/Banner';
import Footer from './Components/Home/Footer/Footer';

function App() {
  return (
    <ContextProvider>
       <Router>
         <Header></Header>
       <Switch>
          <Route path="/header">
           <Header></Header>
          </Route>
          <Route path="/banner">
            <Banner></Banner>
          </Route>
          <Route path="/footer">
           <Footer></Footer>
          </Route>
          <Route exact path="/">
          <Home></Home>
          </Route>
        </Switch>
       </Router>
    </ContextProvider>
  );
}

export default App;
