import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUpForm from "./components/SignUpForm";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Garage from "./components/Garage";
import Cart from "./components/Cart";
import Account from "./components/Account";
import { toast } from "react-toastify";

toast.configure();

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUpForm />
          </Route>
          <Route path="/garage">
            <Garage />
          </Route>
          <Route path="/account">
            <Account />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
