
import React, {useEffect} from "react";
import {BrowserRouter as Router,
Switch, Route} from "react-router-dom"



import { connectWithSocket } from "./utils/socket/connection";
import './App.css';
import Dashboard from "./Dashboard/Dashboard";
import LoginPage from "./LoginPage/LoginPage";

function App() {

  useEffect(() => {
    connectWithSocket()
  }, [])

  return (
    <Router>
      <Switch>
        <Route path={"/dashboard"}>
          <Dashboard/>
        </Route>
        <Route path="/">
          <LoginPage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
