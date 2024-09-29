let create = document.querySelector(".edit-div");
let remove = document.querySelector(".delete-div");
let inputBox = document.querySelector(".input");
let inputDiv = document.querySelector(".input-div");

create.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  inputBox.className = "input";
  inputBox.setAttribute("contenteditable", "true");

  inputDiv.appendChild(inputBox);
});

remove.addEventListener("click", () => {
  let inputBox = document.querySelector(".input");
  inputDiv.removeChild(inputBox);
  updateStorage();
});

inputDiv.addEventListener("click", (e) => {
  if (e.target.tagName === "P") {
    inputBox = document.querySelectorAll(".input");
    inputBox.forEach((box) => {
      box.onkeyup = function () {
        updateStorage();
      };
    });
  }
});

function updateStorage() {
  localStorage.setItem("inputBox", inputDiv.innerHTML);
}

function showNotes() {
  inputDiv.innerHTML = localStorage.getItem("inputBox");
}
showNotes();

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    document.execCommand("insertLineBreak");
    e.preventDefault();
  }
});
