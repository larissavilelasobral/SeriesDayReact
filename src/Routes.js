import Home from './pages/HomePage/HomePage';
import { Switch, Route, BrowserRouter} from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <>
        <Switch>
          <Route component = { Home }  path="/" exact />
        </Switch>
      </>
    </BrowserRouter>
  );
}

export default Router;
