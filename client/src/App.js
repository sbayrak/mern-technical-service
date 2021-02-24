import React, { useEffect } from 'react';
import './styles.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './store';
import Login from './pages/auth/Login';
import Alert from './layout/Alert';
import Footer from './layout/Footer';
import PrivateRoute from './pages/routing/PrivateRoute';
import Home from './pages/routes/Home';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import Register from './pages/auth/Register';
import Navbar from './layout/Navbar';
import Sidebar from './layout/Sidebar';
import CreateRecord from './pages/records/CreateRecord';
import Records from './pages/records/Records';

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
        <Navbar></Navbar>
        <Alert></Alert>
        <Switch>
          <Route exact path='/login' component={Login}></Route>
          <Route exact path='/register' component={Register}></Route>
          <PrivateRoute exact path='/' component={Home}></PrivateRoute>
          <PrivateRoute
            exact
            path='/create-record'
            component={CreateRecord}
          ></PrivateRoute>
          <PrivateRoute
            exact
            path='/records'
            component={Records}
          ></PrivateRoute>
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
