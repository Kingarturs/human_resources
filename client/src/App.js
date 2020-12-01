import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoginPage from './screens/LoginPage';
import IndexPage from './screens/IndexPage';
import NewEmployee from './screens/NewEmployee';
import SearchEmployee from './screens/SearchEmployee';
import ModifyEmployee from './screens/ModifyEmployee';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={ IndexPage } />
          <Route exact path="/login" component={ LoginPage } />
          <Route exact path="/newEmployee" component={ NewEmployee } />
          <Route exact path="/search/:id" component={ SearchEmployee } />
          <Route exact path="/edit/:id" component={ ModifyEmployee } />
        </Switch>
    </Router>
  );
}

export default App;
