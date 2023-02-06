// cancelling existing reservations button
window.onload = function () {
  document
    .getElementById("host_existing_reservation_btn_decline1")
    .addEventListener("click", function (event) {
      event.preventDefault();
      this.innerHTML = "Declined";
    });
  document
    .getElementById("host_existing_reservation_btn_decline1")
    .addEventListener("click", function () {
      this.style.backgroundColor = "#484848";
      this.style.color = "white";
    });

  document
    .getElementById("host_existing_reservation_btn_decline2")
    .addEventListener("click", function (event) {
      event.preventDefault();
      this.innerHTML = "Declined";
    });
  document
    .getElementById("host_existing_reservation_btn_decline2")
    .addEventListener("click", function () {
      this.style.backgroundColor = "#484848";
      this.style.color = "white";
    });

  document
    .getElementById("host_existing_reservation_btn_decline3")
    .addEventListener("click", function (event) {
      event.preventDefault();
      this.innerHTML = "Declined";
    });
  document
    .getElementById("host_existing_reservation_btn_decline3")
    .addEventListener("click", function () {
      this.style.backgroundColor = "#484848";
      this.style.color = "white";
    });

  document
    .getElementById("host_existing_reservation_btn_decline4")
    .addEventListener("click", function (event) {
      event.preventDefault();
      this.innerHTML = "Declined";
    });
  document
    .getElementById("host_existing_reservation_btn_decline4")
    .addEventListener("click", function () {
      this.style.backgroundColor = "#484848";
      this.style.color = "white";
    });

  document
    .getElementById("host_existing_reservation_btn_decline5")
    .addEventListener("click", function (event) {
      event.preventDefault();
      this.innerHTML = "Declined";
    });
  document
    .getElementById("host_existing_reservation_btn_decline5")
    .addEventListener("click", function () {
      this.style.backgroundColor = "#484848";
      this.style.color = "white";
    });

  document
    .getElementById("host_existing_reservation_btn_decline6")
    .addEventListener("click", function (event) {
      event.preventDefault();
      this.innerHTML = "Declined";
    });
  document
    .getElementById("host_existing_reservation_btn_decline6")
    .addEventListener("click", function () {
      this.style.backgroundColor = "#484848";
      this.style.color = "white";
    });

  document
    .getElementById("host_existing_reservation_btn_decline7")
    .addEventListener("click", function (event) {
      event.preventDefault();
      this.innerHTML = "Declined";
    });
  document
    .getElementById("host_existing_reservation_btn_decline7")
    .addEventListener("click", function () {
      this.style.backgroundColor = "#484848";
      this.style.color = "white";
    });

  function checkValue(input) {
    if (input.value < 1) {
      input.value = 1;
    } else if (input.value > 5) {
      input.value = 5;
    }
  }
};
