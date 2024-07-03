let btn = document.querySelector(".s-btn");
let userName = document.getElementById("input1");
let email = document.getElementById("input2");
let message = document.querySelector(".message");
let formC = document.querySelector(".form-container");

// ----------------------------data-container-------------------------------------
let dataC = document.querySelector(".data-container");
let dleBtn = document.getElementById("delBtn");
let data = document.querySelector(".data");

btn.addEventListener("click", () => {
  formC.style.display = "none";
  dataC.style.display = "block";

  if (userName.value.trim() == "") {
    alert("name");
    formC.style.display = "block";
    dataC.style.display = "none";
    dataIn.removeChild();
  }

  if (email.value.trim() == "") {
    alert("email");
    formC.style.display = "block";
    dataC.style.display = "none";
    dataIn.removeChild();
  }

  if (message.value.trim() == "") {
    alert("message");
    formC.style.display = "block";
    dataC.style.display = "none";
    dataIn.removeChild();
  }

  var dataIn = document.createElement("div");
  console.log(dataIn);
  dataIn.classList.add("data-in");
  data.appendChild(dataIn);

  var n = document.createElement("p");
  n.classList.add("paragraph");
  dataIn.appendChild(n);
  n.innerText = userName.value;
  userName.value = "";

  var e = document.createElement("p");
  e.classList.add("paragraph");
  dataIn.appendChild(e);

  e.innerText = email.value;
  email.value = "";

  var t = document.createElement("p");
  t.classList.add("paragraph");
  dataIn.appendChild(t);
  t.innerText = message.value;
  message.value = "";
});

dleBtn.addEventListener("click", () => {
  formC.style.display = "block";
  dataC.style.display = "none";
});
