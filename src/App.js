import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./components/Checkout";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <div
        style={
          darkMode
            ? { backgroundColor: "#252525" }
            : { backgroundColor: "#e9e9e9" }
        }
        className="app"
      >
        <Header
          darkMode={darkMode}
          toggleDarkMode={() => setDarkMode(!darkMode)}
        />
        <Switch>
          <Route exact path="/">
            <Home darkMode={darkMode} />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
