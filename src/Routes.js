import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/HomePage/HomePage';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

const Router = () => {
  return (
    <BrowserRouter>
      <>
        <Switch>
          <Route component = { Home } path="/" exact />
          <Route component={ Login } path="/login" />
          <Route component={ Register } path="/register" />
        </Switch>
      </>
    </BrowserRouter>
  );
}

export default Router;
