import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./styles/style.css";
import { getToken, isAuthenticated } from "../js/AuthSvc";
import Navbar from "./navbar";
import { normalAlert } from "../js/AlertSvc";

const baseURL = "http://127.0.0.1:8000";

function PrivateProfile() {
  const [data, setData] = useState([]);
  const accessToken = getToken();
  useEffect(() => {
    async function fetchData() {
      fetch(`${baseURL}/users/viewMyProfile/`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    fetchData();
  }, []);

  const authenticated = isAuthenticated();
  if (!authenticated) {
    return normalAlert(
      5,
      "Access Denied",
      "You are trying to access a page that requires you to login. You will be logged out and redirected to the Sign-in page."
    );
  }

  var avatar = data.avatar;
  if (avatar != null) {
    console.log(avatar);
  }

  return (
    <>
      <Navbar />
      <main>
        <div
          className="container d-flex align-items-center justify-content-center col-sm-6 col-md-6 col-lg-5"
          styles="min-height: 100vh; height: 100%"
        >
          <div className="container">
            <div className="fs-1 fw-bold">Personal Info</div>

            <div className="card">
              <div className="card-body">
                <div className="img_profile_container">
                  {avatar ? (
                    <img className="image_profile" src={avatar} alt="Avatar" />
                  ) : (
                    <img
                      className="image_profile"
                      src={require("./avatar.png")}
                      alt="Avatar"
                    />
                  )}
                </div>
                <div className="text-center update_profile_picture">
                  <a
                    className="update_profile_picture_link"
                    href="update_photo.html"
                  >
                    Update photo
                  </a>
                </div>

                <div className="Legal_name_container">
                  <p className="fs-5 legal_name_profile">Legal Name</p>
                  <p className="actual_legal_name_profile">
                    {data.first_name + " " + data.last_name}
                  </p>
                  <details className="text-end">
                    <summary className="fw-semibold text-decoration-underline legal_name_summary">
                      Edit
                    </summary>
                    <input
                      className="form-control fs-6 fw-semibold"
                      type="text"
                      id=""
                      placeholder="First name"
                      required
                    />
                    <input
                      className="form-control fs-6 fw-semibold"
                      type="text"
                      id=""
                      placeholder="Last name"
                      required
                    />
                    <input
                      className="btn btn-success w-100 fw-semibold button_format_sign_up save_button_profile"
                      type="submit"
                      value="Save"
                    />
                  </details>
                </div>

                <hr />

                <div className="email_address_container">
                  <p className="fs-5">Email Address</p>
                  <p className="email_profile">{data.email}</p>
                  <details className="text-end">
                    <summary className="fw-semibold text-decoration-underline email_address_summary">
                      Edit
                    </summary>
                    <input
                      className="form-control fs-6 fw-semibold"
                      type="text"
                      id=""
                      placeholder="Email Address"
                      required
                    />
                    <input
                      className="btn btn-success w-100 fw-semibold button_format_sign_up save_button_profile"
                      type="submit"
                      value="Save"
                    />
                  </details>
                </div>
                <hr />

                <div className="phone_number_container">
                  <p className="fs-5">Phone Number</p>
                  <p className="phone_number_profile">{data.phone_number}</p>
                  <details className="text-end">
                    <summary className="fw-semibold text-decoration-underline phone_number_summary">
                      Edit
                    </summary>
                    <input
                      className="form-control fs-6 fw-semibold"
                      type="text"
                      id=""
                      placeholder="Phone number"
                      required
                    />
                    <input
                      className="btn btn-success w-100 fw-semibold button_format_sign_up save_button_profile"
                      type="submit"
                      value="Save"
                    />
                  </details>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default PrivateProfile;
