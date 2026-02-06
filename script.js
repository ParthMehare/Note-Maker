let open_form = document.querySelector("#open");
let pre = document.querySelector("#previous");
let next = document.querySelector("#next");
let form_container = document.querySelector(".form-container");
let wrapper = document.querySelector(".wrapper");
let create_btn = document.querySelector(".create");
let form = document.querySelector("form");
let close_btn = document.querySelector(".close");
let card = document.querySelector(".card");

let counter = 0;

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

open_form.addEventListener("click", () => {
  form_container.classList.remove("hide");
  wrapper.classList.add("hide");
});

function addtoLocalStorage(obj) {
  if (localStorage.getItem("tasks") === null) {
    let oldTasks = [];
    oldTasks.push(obj);
    localStorage.setItem("tasks", JSON.stringify(oldTasks));
  } else {
    let oldTasks = JSON.parse(localStorage.getItem("tasks"));
    oldTasks.push(obj);
    localStorage.setItem("tasks", JSON.stringify(oldTasks));
  }
}

function showCard(counter) {
  let arr = JSON.parse(localStorage.getItem("tasks") || "[]");
  if (arr.length === 0) return;

  card.innerHTML = "";
  createNoteCard(arr[counter]);
}

pre.addEventListener("click", () => {
  const len = JSON.parse(localStorage.getItem("tasks") || "[]").length - 1;
  counter--;
  if (counter < 0) {
    counter = len;
  }
  showCard(counter);
});

next.addEventListener("click", () => {
  const len = JSON.parse(localStorage.getItem("tasks") || "[]").length - 1;
  counter++;
  if (counter > len) {
    counter = 0;
  }
  showCard(counter);
});

function createNoteCard(obj) {
  let link = obj.link;
  let name = obj.name;
  let home = obj.home;
  let purpose = obj.purpose;

  // ===== PROFILE =====
  let profile = document.createElement("div");
  profile.classList.add("profile");

  let img = document.createElement("img");
  img.src = link;

  let nameBox = document.createElement("div");
  let nameText = document.createElement("div");
  nameText.classList.add("name");
  nameText.textContent = name;

  nameBox.appendChild(nameText);
  profile.appendChild(img);
  profile.appendChild(nameBox);

  // ===== INFO 1 (Home) =====
  let infoHome = document.createElement("div");
  infoHome.classList.add("info");

  let homeLabel = document.createElement("span");
  homeLabel.textContent = "Home town";

  let homeValue = document.createElement("span");
  homeValue.textContent = home;

  infoHome.appendChild(homeLabel);
  infoHome.appendChild(homeValue);

  // ===== INFO 2 (Purpose) =====
  let infoPurpose = document.createElement("div");
  infoPurpose.classList.add("info");

  let purposeLabel = document.createElement("span");
  purposeLabel.textContent = "Purpose";

  let purposeValue = document.createElement("span");
  purposeValue.textContent = purpose;

  infoPurpose.appendChild(purposeLabel);
  infoPurpose.appendChild(purposeValue);

  // ===== ACTION BUTTONS =====
  let actions = document.createElement("div");
  actions.classList.add("actions");

  let callBtn = document.createElement("button");
  callBtn.classList.add("call");
  callBtn.textContent = "📞 Call";

  let msgBtn = document.createElement("button");
  msgBtn.classList.add("msg");
  msgBtn.textContent = "Message";

  actions.appendChild(callBtn);
  actions.appendChild(msgBtn);

  // ===== APPEND ALL TO CARD =====
  card.appendChild(profile);
  card.appendChild(infoHome);
  card.appendChild(infoPurpose);
  card.appendChild(actions);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let link = linkInput.value.trim();
  let name = nameInput.value.trim();
  let home = homeInput.value.trim();
  let purpose = purposeInput.value.trim();

  let selectedCategory = document.querySelector('input[name="category"]:checked');

  // ===== VALIDATION =====
  if (!link || !name || !home || !purpose) {
    alert("Please fill all fields.");
    return;
  }

  if (!link.startsWith("http")) {
    alert("Enter a valid image URL.");
    return;
  }

  if (!selectedCategory) {
    alert("Please select a category.");
    return;
  }

  let selected = selectedCategory.id;

  addtoLocalStorage({ link, name, home, purpose, selected });

  // ⭐ show newest card immediately
  counter = JSON.parse(localStorage.getItem("tasks")).length - 1;
  showCard(counter);

  form.reset();
});


close_btn.addEventListener("click", () => {
  form_container.classList.add("hide");
  wrapper.classList.remove("hide");
});
