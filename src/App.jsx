import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import DashBoard from "./components/DashBoard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Transaction from "./components/Transaction";
function App() {
  return (
    <>
      <ToastContainer />
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/dash">
          <DashBoard />
        </Route>
      </Switch>
    </>
  );
}

export default App;
