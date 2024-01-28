const spanEl = document.querySelector("h1 span");

const allJobs = ["Developper", "Youtuber", "Designer", "Bloguer", "Programmer"];

let timer = null;
let letter = 0,
  word = 0;

timer = setInterval(() => {
  if (letter == allJobs[word].length) {
    letter = 0;
    word++;
    if (word === allJobs.length) {
      word = 0;
    }
    spanEl.innerText = "";
  }

  spanEl.innerText += `${allJobs[word][letter++]}`;
}, 1000);
