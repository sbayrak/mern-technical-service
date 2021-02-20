import React, { useEffect } from 'react';
import './styles.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './store';
import Login from './pages/auth/Login';
import Alert from './layout/Alert';
import Home from './pages/routes/Home';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Alert></Alert>
        <Switch>
          <Route exact path='/login' component={Login}></Route>
          <Route exact path='/' component={Home}></Route>
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
