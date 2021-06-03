import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Home from '../Pages/Home';
import Topics from '../Pages/Topics';
import Documentation from '../Pages/Documentation';
import Contact from '../Pages/Contact';
import Navbar from '../Layout/Components/Navbar';
import Login from '../Pages/Login';
import New from '../Pages/New';

const Routes = () => {
  return (
    <div className="App">
      <Navbar/>
        <main>
          <Switch>
              <Route path="/login" component={Login}></Route>
              <Route exact path="/">
                <Redirect to="/login" />
              </Route>
              {/* <Route path="/login" component={Login}/> */}
              <Route path="/home" component={Home}/> 
              <Route path="/topics" component={Topics}/> 
              <Route path="/documentation" component={Documentation}/> 
              <Route path="/contact" component={Contact}/> 
              <Route path="/new" component={New}/>
          </Switch>
        </main>
    </div>
  );
}

export default Routes;
