import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

import './assets/styles/reset.css';
import './assets/styles/style.css';

export default function App () {
  return (
    <Router>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home" exact>
            <Home />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/sign-up" exact>
            <SignUp />
          </Route>
        </Switch>
    </Router>
  );
}
