import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Addservices from './Pages/Addservices/Addservices';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './context/AuthProvider/AuthProvider';
import Services from './Pages/Services/Services';
import PrivateRouth from './Pages/Login/PrivateRouth/PrivateRouth';
import Booking from './Booking/Booking';
import Myorder from './Pages/Myorder/Myorder';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/addservice">
              <Addservices />
            </Route>
            <PrivateRouth path="/services">
              <Services />
            </PrivateRouth>
            <Route path="/booking/:serviceId">
              <Booking></Booking>
            </Route>
            <Route path="/myorder">
              <Myorder></Myorder>
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
