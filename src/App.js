import React, { useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import './App.css';
import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";
import Mail from "./Mail";
import EmailList from "./EmailList";
import SendMail from "./SendMail";
import {useDispatch, useSelector} from "react-redux";
import {selectSendMessageIsOpen} from "./features/mailSlice";
import {login, selectUser} from "./features/userSlice"
import Login from './Login';
import {auth} from "./firebase"

function App() {
  const sendMessageIsOpenss= useSelector(selectSendMessageIsOpen);
  const userss= useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() =>{
    auth.onAuthStateChanged(user => {
      if (userss) {
        dispatch(login({
          displayName:user.displayName,
          email:user.email,
          photourl: user.photoURL
        }));
      } 
    });

  }, []);
  return (
    <Router>
      {!userss ? (
      <Login/>
      ) : (
        <div className="app">
        <Header/>
        <div className= "app__body">
          <Sidebar/>
          <Switch>
              <Route path="/mail">
                 <Mail/> 
              </Route>
              <Route path="/">
                  <EmailList/>
               </Route>
          </Switch>
      
        </div>
        {sendMessageIsOpenss && <SendMail/>}
      </div>
      )
      }
          </Router>
  );
}

export default App;
