import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import LoginPage from 'features/auth/pages/LoginPage';
import {NotFound, PrivateRoute} from 'components/Common';

function App() {

  return (
    <div className="App">
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/admin">
          <PrivateRoute />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
   </div>
  );
}

export default App;
