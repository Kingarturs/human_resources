import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoginPage from './screens/LoginPage';
import IndexPage from './screens/IndexPage';
import NewEmployee from './screens/NewEmployee';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={ IndexPage } />
          <Route exact path="/login" component={ LoginPage } />
          <Route exact path="/newEmployee" component={ NewEmployee } />
        </Switch>
    </Router>
  );
}

export default App;
