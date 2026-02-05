let btn1 = document.querySelector("#open");
let form_container = document.querySelector(".form-container");
let wrapper = document.querySelector(".wrapper");

btn1.addEventListener("click", ()=>{
    form_container.style.display = "initial";
    wrapper.style.display = "none";
})