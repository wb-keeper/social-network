import './App.css';

import {Header} from "./components/Header/Header";

import {Navbar} from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter as Router, Route} from "react-router-dom";
import React from "react";

const App = ({appState:{profilePage,messagesPage}}) => {
  return (
      <Router>
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content' >
              <Route path='/dialogs'
                     render={() => <Dialogs messagesData={messagesPage.messagesData} dialogsData={profilePage.dialogsData}/>} exact/>
              <Route path='/profile'
                     render={() => <Profile posts={profilePage.posts}/>} exact/>
      </div>
    </div>
      </Router>
  );
}



export default App;
