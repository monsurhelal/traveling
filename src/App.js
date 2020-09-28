import React, { createContext, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/loginFrom/Login';
import  Book  from './components/book/Book';
import PrivateRoute from './components/PriveteRoute/PrivateRoute';

export const UserContext = createContext();


function App() {

const [loggedInUser,setloggedInUser] = useState()

  return (
    <div className = "App">
   <UserContext.Provider value={[loggedInUser,setloggedInUser]}>
      <Router>
        <Switch>
        
          <Route path="/home">
            <Home></Home>
          </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <PrivateRoute path="/book">
         <Book></Book>
        </PrivateRoute>
        <Route exact path="/">
            <Home></Home>
          </Route>

        </Switch>


      </Router>
       
      </UserContext.Provider>
    </div>
  );
}

export default App;
