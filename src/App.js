import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <main>
          <Switch>
              <Route path="/" exact> <Home/> </Route>
              <Route path="/contact" exact> <Contact/> </Route>
              <Route path="/about" exact> <About/> </Route>

              <Redirect to = "/" />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
