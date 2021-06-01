import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Home from '../Pages/Home';
import Contact from '../Pages/Contact';
import Documentation from '../Pages/Documentation';
import Navbar from '../Layout/Components/Navbar';
import Login from '../Pages/Login';

const Routes = () => {
  return (
    <div className="App">
      <Navbar/>
        <main>
          <Switch>
              {/* <Route path="/login"><Login/></Route>
              <Route exact path="/">
                <Redirect to="/login" />
              </Route> */}
              <Route path="/login"><Login/></Route>
              <Route path="/home"> <Home/> </Route>
              <Route path="/contact"> <Contact/> </Route>
              <Route path="/documentation"> <Documentation/> </Route>

              <Redirect to = "/" />
          </Switch>
        </main>
    </div>
  );
}

export default Routes;
