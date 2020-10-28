import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import './App.css';
import NotFound from "./pages/NotFound/NotFound";
import Login from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import PartnerSignUp from "./pages/PartnerSignUp/PartnerSignUp";
import ServicePage from "./pages/ServicePage/ServicePage";
import SignUp  from './pages/SignUpPage/SignUpPage';
import PartnerLoginPage from "./pages/PartnerLoginPage/PartnerLoginPage"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/login" exact component={Login}/>
          <Route path="/partner/login" exact component={PartnerLoginPage}/>
          <Route path="/register" exact component={SignUp}/>
          <Route path="/partner" exact component={PartnerSignUp} />
          <Route path="/dashboard" exact component={ServicePage}/>
          <Route path="/404" component={NotFound} />
          <Redirect to="/404"/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
