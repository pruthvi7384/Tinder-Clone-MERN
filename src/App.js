import React from "react";
import { Redirect, Route, Switch } from 'react-router';
import './App.css';
import Chats from "./components/Chats";
import Header from "./components/Header";
import ChatRoom from "./components/ChatRoom";
import TinderCards from "./components/TinderCards";
function App() {
  return (
    <Switch>
        <Route exact path="/">
          <Header/>
          <TinderCards/>
        </Route>
        <Route exact path="/chat">
          <Header backbutton="/" />
          <Chats/>
        </Route>
        <Route exact path="/chat/:person">
          <Header backbutton="/chat" />
          <ChatRoom/>
        </Route>
        <Redirect to="/" />
      </Switch>
  );
}

export default App;
