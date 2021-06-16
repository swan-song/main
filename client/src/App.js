import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUpForm from "./components/SignUpForm";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <Switch>
          <Route path="/signup">
            <SignUpForm />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
