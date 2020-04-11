const form = document.querySelector("#memeForm");
const tpTxtInp = document.querySelector('input[name="inputTop"]');
const btmTxtInp = document.querySelector('input[name="inputBottom"]');
const urlInp = document.querySelector('input[name="inputUrl"]');
const results = document.querySelector("#memeBody");
const template = document.querySelector(".template");
const clone = template.content.cloneNode(true);
const text = clone.querySelectorAll("span");
const image = clone.querySelector("img");

//make random meme generator?

form.addEventListener("submit", function (e) {
  e.preventDefault();
  renderMeme();
  //   console.log(newMeme.topKey);
  //   console.log(newMeme.bottomKey);
  //   console.log(newMeme.urlKey);
});

function makeMeme(urlKey, topKey, bottomKey) {
  return {
    topKey,
    bottomKey,
    urlKey,
  };
}

function renderMeme() {
  let newMeme = makeMeme(urlInp.value, tpTxtInp.value, btmTxtInp.value);
  console.log(newMeme.topKey, newMeme.bottomKey, newMeme.urlKey);
  text[0].textContent = newMeme.topKey;
  text[1].textContent = newMeme.bottomKey;
  image.src = newMeme.urlKey;
  results.appendChild(clone);
}
