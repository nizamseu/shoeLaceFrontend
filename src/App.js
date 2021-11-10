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
import Login from './Components/Authorization/Login/Login'
import Register from './Components/Authorization/Register/Register'
import Products from './Components/Home/Products/Products';
import PrivateRoute from './Components/Authorization/PrivateRoute/PrivateRoute';


function App() {
  return (
    <ContextProvider>
       <Router>
         <Header></Header>
       <Switch>
          <Route path="/header">
           <Header></Header>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/reg">
           <Register></Register>
          </Route>
          <PrivateRoute path="/products">
           <Products></Products>
          </PrivateRoute>
          <Route exact path="/">
          <Home></Home>
          </Route>
        </Switch>
       </Router>
    </ContextProvider>
  );
}

export default App;
