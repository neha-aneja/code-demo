import React from 'react';
import {
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Home from '../Pages/Home';
import Topics from '../Pages/Topics';
import Menu1 from '../Pages/Topics/Menu/Menu1';
import Menu2 from '../Pages/Topics/Menu/Menu2';
import Menu3 from '../Pages/Topics/Menu/Menu3';
import Menu4 from '../Pages/Topics/Menu/Menu4';
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
              <Route path="/menu1" component={Menu1}/>
              <Route path="/menu2" component={Menu2}/>
              <Route path="/menu3" component={Menu3}/> 
              <Route path="/menu4" component={Menu4}/> 
              <Route path="/documentation" component={Documentation}/> 
              <Route path="/contact" component={Contact}/> 
              <Route path="/new" component={New}/>
          </Switch>
        </main>
    </div>
  );
}

export default Routes;
