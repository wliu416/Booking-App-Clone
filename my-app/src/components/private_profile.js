// import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./styles/style.css";
import { getToken, isAuthenticated, getUsername } from "../js/AuthSvc";

const baseURL = "http://127.0.0.1:8000";

function PrivateProfile() {
  try {
    const accessToken = getToken();

    fetch(`${baseURL}/users/viewMyProfile/`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // handle response data
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.error(error);
  }
}
export default PrivateProfile;
