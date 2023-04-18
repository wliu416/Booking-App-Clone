import React from "react";
import "./App.css";
import SignUpForm from "./components/signup_form";
import SignInForm from "./components/signin_form";
import Dashboard from "./components/dashboard";
import Host_Dashboard from "./components/host_dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SignUpForm />}>
            {" "}
          </Route>
          <Route path="/signIn" element={<SignInForm />}>
            {" "}
          </Route>
          <Route path="/dashboard" element={<Dashboard />}>
            {" "}
          </Route>
          <Route path="/host_dashboard" element={<Host_Dashboard />}>
            {" "}
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
