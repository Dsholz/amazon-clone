import React, { useState } from "react";
import "../styles/Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth, GoogleProvider } from "../firebase/firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPasssword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((err) => alert(err.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((err) => alert(err.message));
  };

  const googleSignIn = (e) => {
    e.preventDefault();

    auth
      .signInWithPopup(GoogleProvider)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://1000logos.net/wp-content/uploads/2019/07/Amazon-logo-2000%E2%80%93present.jpg"
          alt="Login Logo"
        />
      </Link>

      <div className="login__container">
        <h1>Sign Up</h1>

        <form onSubmit={signIn}>
          <h5>E-mail</h5>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <h5>Password</h5>
          <input
            type="password"
            onChange={(e) => setPasssword(e.target.value)}
            value={password}
          />

          <button type="submit" className="login__sign-up-btn">
            Sign Up
          </button>
        </form>

        <p>
          By sigining in you agree to the Amazon Clone conditions of Use & Sale,
          Please see our privacy
        </p>

        <p>New User?</p>

        <button onClick={register} className="login__register-btn">
          Create your Amazon Account
        </button>

        <button
          onClick={googleSignIn}
          className="login__register-btn  login__register-google"
        >
          Sign In With Google
        </button>
      </div>
    </div>
  );
}

export default Login;
