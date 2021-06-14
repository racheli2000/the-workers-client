import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from "./redux/store";
import Login from './components/login';
import Status from './components/status';
import Home from './components/home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Manue from './components/manue';
import Admin from './components/admin';
import User from './components/user';



function App() {
  return (
    <div className="App">
  <Provider store={store}>
  <Router> 
         <Manue></Manue>
         <Switch>
           <Route path="/LOGIN">
             <Login />
           </Route>
           <Route path="/ADMIN">
             <Admin />
           </Route>
           <Route path="/USER">
             <User />
           </Route>           <Route path="/STATUS">
             <Status/>
           </Route>
           <Route path="/">
             <Home />
           </Route>
         </Switch>
       </Router> 

  </Provider>

      
    </div>
  );
}

export default App;

