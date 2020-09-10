import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { auth } from "./firebase/firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [, dispatch] = useStateValue();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

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
        <Switch>
          <Route exact path="/">
            <Header
              darkMode={darkMode}
              toggleDarkMode={() => setDarkMode(!darkMode)}
            />
            <Home darkMode={darkMode} />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header
              darkMode={darkMode}
              toggleDarkMode={() => setDarkMode(!darkMode)}
            />
            <Checkout darkMode={darkMode} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
