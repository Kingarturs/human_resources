import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoginPage from './screens/LoginPage';
import IndexPage from './screens/IndexPage';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <IndexPage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;