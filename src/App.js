import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Components/Login/Login';
import { Navbar } from 'react-bootstrap';
import { createContext, useState } from 'react';
import BookingList from './Components/BookingList/BookingList';
export const UserContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser] = useState();
  return (
   
<UserContext.Provider value ={[loggedInUser,setLoggedInUser]}>
<Router>

            <Switch>
                <Route  exact path="/">
                <Home></Home>
                </Route>
                <Route  exact path="/login">
                <Login></Login>
                </Route>
                <Route  exact path="/admin/bookinglist">
            <BookingList></BookingList>
                </Route>
            </Switch>
        </Router>
 
        </UserContext.Provider>
  );
}

export default App;
