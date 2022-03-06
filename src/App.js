import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoginComponent  from "./components/login";
import HomeComponent from "./components/home";
function App() {
  return (
   <Router>
      <div>
        <Switch>
          <Route path="/">
            <LoginComponent />
          </Route>
          <Route path="/home">
            <HomeComponent />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
