import React from 'react';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TinderCards from './components/TinderCards/TinderCards';
import ActionsButton from './components/ActionsButton/ActionsButton';
import Chat from './components/Chat/Chat';
import ChatMessage from './components/ChatMessage/ChatMessage';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <TinderCards />
            <ActionsButton />
          </Route>
          <Route path="/chat">
            <Header backButton="/" />
            <Chat />
          </Route>
          <Route path="/message/:id">
            <Header backButton="/chat" />
            <ChatMessage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
