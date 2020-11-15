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
import PartnerDashboardPage from "./pages/PartnerDashboardPage/PartnerDashboardPage";

function App (){
  
  
  return (
    <div className="App">
      
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/login" exact component={() =>{return <Login/>}}/>
          <Route path="/partner/login" exact component={PartnerLoginPage}/>
          <Route path="/register" exact component={() =>{return <SignUp/>}}/>
          <Route path="/partner" exact component={PartnerSignUp} />
          <Route path="/dashboard" exact component={() =>{
              return (localStorage.getItem('isClient') === "true" ? <ServicePage /> : <Redirect to="login"/>)
          }}/>
          <Route path="/partner/dashboard" exact component={()=>{
              return (localStorage.getItem("isMechanic") === "true"?<PartnerDashboardPage/> : <Redirect to="login"/>)}}/>
          <Route path="/404" component={NotFound} />
          <Redirect to="/404"/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
