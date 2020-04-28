import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Acceuil from "../Acceuil";
import Welcome from "../Welcome";
import Login from "../Login";
import Signup from "../Signup";
import ForgetPassword from "../ForgetPassword";
import Destinations from "../Destinations";
import Contact from "../Contact";
import Navbar from "../Navbar";
import "../../App.css";
import { IconContext } from "react-icons";

function App() {
  return (
    <Router>
      <Navbar />
      <script src="https://kit.fontawesome.com/1d7197e122.js"></script>
      <link
        rel="stylesheet"
        href="https://kit-free.fontawesome.com/releases/latest/css/free.min.css"
        media="all"
      ></link>
      <IconContext.Provider value={{ style: { verticalAlign: "middle" } }}>
        <Switch>
          <Route exact path="/" component={Acceuil} />
          <Route path="/welcome" component={Welcome} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/forgetpassword" component={ForgetPassword} />
          <Route path="/Destinations" component={Destinations} />
          <Route path="/Contact" component={Contact} />

        </Switch>
      </IconContext.Provider>
    </Router>
  );
}

export default App;
