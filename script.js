let btn1 = document.querySelector("#open");
let form_container = document.querySelector(".form-container");
let wrapper = document.querySelector(".wrapper");
let create_btn = document.querySelector(".create");
let form = document.querySelector("form");
let close_btn = document.querySelector(".close");

// text inputs
let linkInput = document.querySelector("#link");
let nameInput = document.querySelector("#name");
let homeInput = document.querySelector("#home");
let purposeInput = document.querySelector("#purpose");

// radio buttons
let emergencyRadio = document.querySelector("#emergency");
let importantRadio = document.querySelector("#important");
let urgentRadio = document.querySelector("#urgent");
let norushRadio = document.querySelector("#norush");
let counter = 0;
localStorage.setItem("counter", counter);
console.log(localStorage.length);

btn1.addEventListener("click", () => {
  form_container.classList.remove("hide");
  wrapper.classList.add("hide");
});

form.addEventListener("submit", (inp) => {
  inp.preventDefault();

  let radios = document.querySelectorAll('input[name="category"]');
  let selectedValue = "";

radios.forEach(radio => {
  if (radio.checked) {
    selectedValue = radio.getAttribute("id");
  }
});
let user = {
  img: linkInput.value,
  fullname: nameInput.value,
  home: homeInput.value,
  purpose: purposeInput.value,
  cat: selectedValue
}
localStorage.setItem("user", JSON.stringify(user));
form.reset();
});

close_btn.addEventListener("click", () => {
  form_container.classList.add("hide");
  wrapper.classList.remove("hide");
});