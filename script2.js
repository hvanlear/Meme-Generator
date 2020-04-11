const form = document.querySelector("#memeForm");
const tpTxtInp = document.querySelector('input[name="inputTop"]');
const btmTxtInp = document.querySelector('input[name="inputBottom"]');
const urlInp = document.querySelector('input[name="inputUrl"]');
const results = document.querySelector("#memeBody");

form.addEventListener("submit", function(e) {
  //prevents from spamming the submit button
  if (!urlInp.value) {
    console.log("worked");
    e.preventDefault();
    return;
  }
  e.preventDefault();
  createDiv();
  form.reset();
});

results.addEventListener("click", function(e) {
  if (e.target.tagName === "BUTTON") {
    e.target.parentElement.parentElement.remove();
  }
});

function createDiv() {
  let newDiv = document.createElement("div");
  let overlay = document.createElement("div");
  let deleteBtn = document.createElement("button");
  let topText = document.createElement("span");
  let bottomText = document.createElement("span");
  let image = document.createElement("img");
  overlay.className = "overlay";
  deleteBtn.className = "deleteBtn";
  topText.className = "topText";
  bottomText.className = "bottomText";
  image.className = "memeImg";
  newDiv.className = "meme";
  deleteBtn.innerText = "DELETE";
  topText.innerText = tpTxtInp.value;
  bottomText.innerText = btmTxtInp.value;
  image.src = urlInp.value;
  results.appendChild(newDiv);
  newDiv.appendChild(overlay);
  newDiv.appendChild(image);
  newDiv.appendChild(topText);
  newDiv.appendChild(bottomText);
  overlay.appendChild(deleteBtn);
}
