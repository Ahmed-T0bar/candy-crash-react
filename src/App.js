import React, { useState } from "react";
import { PlayerContext } from "./helper/Context";

import Home from "./pages/Home";
import Game from "./pages/Game";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  const [playerName, setPlayerName] = useState("Default Name");
  const [playerScore, setPlayerScore] = useState(0);

  return (
    <PlayerContext.Provider
      value={{ playerName, setPlayerName, playerScore, setPlayerScore }}
    >
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/game">
            <Game />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </PlayerContext.Provider>
  );
};

export default App;
