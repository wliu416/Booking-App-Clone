import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./styles/style.css";
// import { useNavigate } from "react-router-dom";

function SignInForm() {
  return (
    <main>
      <div className="needs-validation col-md-4 offset-md-4 signin_container border border-secondary">
        <div>
          <h1>Welcome back to Restify</h1>
        </div>

        <br />
        <form action="">
          <div className="form-group">
            <input
              className="form-control fs-6 fw-semibold"
              type="email"
              id="email"
              placeholder="Email"
              required
            />
          </div>

          <br />

          <div className="form-group">
            <input
              className="form-control fs-6 fw-semibold"
              type="password"
              id="password"
              placeholder="Password"
              required
            />
          </div>

          <br />
          <br />

          <div>
            <p>
              By selecting <b>Agree and continue</b>, I acknowledge Restify's
              <a href="privacy_policy.html">Privacy Policy</a>.
            </p>
          </div>

          <input
            className="btn btn-success w-100 fw-semibold button_format_sign_in"
            type="submit"
            value="Agree and continue"
          />
        </form>
      </div>
    </main>
  );
}

export default SignInForm;
