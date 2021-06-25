import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUpForm from "./components/SignUpForm";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Garage from "./components/Garage";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Account from "./components/Account";
import SingleCarPage from "./components/SingleCarPage";
import { toast } from "react-toastify";
import Confirmation from "./components/Confirmation";
import ScrollToTop from "./actions/ScrollToTop";
import About from "./components/About";
import Error from "./components/Error";
import { Container } from "./components/styled-components/styled-components";

toast.configure();

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
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
          <Route path="/cars/:id">
            <SingleCarPage />
          </Route>
          <Route path="/confirmation">
            <Confirmation />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
      <Container footer>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
