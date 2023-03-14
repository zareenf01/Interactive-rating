"use strict";
let rating = document.querySelector(".rating");
let thankyou = document.querySelector(".thankyou");
let buttons = document.querySelectorAll(".btn");
console.log(buttons);
let submit = document.querySelector(".submit");
let h3 = document.querySelector("h3");

thankyou.classList.add("hidden");

// submitting the rating
submit.addEventListener("click", function () {
  rating.classList.add("hidden");
  thankyou.classList.remove("hidden");
});

// active state of buttons
buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    // If the clicked button is already active, do nothing
    if (this.classList.contains("active")) {
      return;
    }
    // Remove the "active" class from all buttons
    buttons.forEach(function (button) {
      button.classList.remove("active");
      button.style.backgroundColor = "";
      button.style.color = "";
    });
    // Add the "active" class to the clicked button
    this.classList.add("active");
    // Set the background and text color of the clicked button
    this.style.backgroundColor = "hsla(0, 1%, 71%, 0.737)";
    this.style.color = "#fff";
  });
});

//updating selected rating
function updateRating(selected) {
  const ratingText = document.getElementById("thanks-h3");
  ratingText.innerText = `You selected ${selected} out of 5`;
}
