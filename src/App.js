import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Pages/Shared/Header';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Home/Footer/Footer';
import AuthProvider from './contexts/AuthProvider';

import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Details from './Pages/Details/Details';
import Registration from './Pages/Home/Registration/Registration';
import Specialists from './Pages/Home/Specialists/Specialists';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>

            <Route path="/registration">
              <Registration></Registration>
            </Route>
            <PrivateRoute path="/detail/:serviceId">
              <Details></Details>
            </PrivateRoute>
            <PrivateRoute path="/specialist/:doctorId">
              <Specialists></Specialists>
            </PrivateRoute>

            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
