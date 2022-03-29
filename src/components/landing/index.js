import {
    Route,
    Switch,
    BrowserRouter,
  } from 'react-router-dom';
  
import ProtectedRoute from '../../routes/protectedRoute';

import HomeComponent from '../home';
import LoginComponent from '../login';
  
  const Routes = () => (
    <BrowserRouter>
      <Switch>
        // public route
        <Route exact path="/" component={LoginComponent} />
  
        // protected route
        <ProtectedRoute exact path="/home" component={HomeComponent} />

      </Switch>
    </BrowserRouter>
  );
  
  export default Routes;
  