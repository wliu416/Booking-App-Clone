import React from "react";
import "./App.css";
import SignUpForm from "./components/signup_form";
import SignInForm from "./components/signin_form";
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
