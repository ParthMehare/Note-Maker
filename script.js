let btn1 = document.querySelector("#open");
let form_container = document.querySelector(".form-container");
let wrapper = document.querySelector(".wrapper");
let create_btn = document.querySelector(".create");
let form = document.querySelector("form");
let close_btn = document.querySelector(".close");

btn1.addEventListener("click", () => {
  form_container.classList.remove("hide");
  wrapper.classList.add("hide");
});

form.addEventListener("submit", (inp) => {
  inp.preventDefault();
  form.reset();
});

close_btn.addEventListener("click", () => {
  form_container.classList.add("hide");
  wrapper.classList.remove("hide");
});
