// const wordArr = ["csoki", "lali"];
const wordArr = ["lali"];
const randWord = wordArr[Math.floor(Math.random() * wordArr.length)];
const word = document.getElementById("word");
const char = document.getElementById("char");
const check = document.getElementById("check");
const error = document.getElementById("error");
const win = document.getElementById("win");
const lost = document.getElementById("lost");
const randWordArr = [];
let badchars = [];

const start = document.getElementById("start");
const svgFrame = document.getElementById("Frame_1");


function svgIcon(i) {
  const svg = document.getElementById(`Vector_${i}`);
  svg.classList.add("d-none");
  return svg;
}

for (let i = 0; i < randWord.length; i++) {
  const element = randWord[i];
  randWordArr.push(element);
}

for (let i = 0; i < randWordArr.length; i++) {
  word.innerHTML += `<div id="charItem-${i}" class='wordChar mx-2'></div>`;
}

char.addEventListener("keyup", () => {
  charValue = char.value;

  const charIndex = randWordArr.findIndex((e) => {
    return e === charValue;
  });

  // let i = 0

  if (randWordArr[charIndex] !== charValue) {
    badchars.push(charValue);
    svgIcon(1).classList.remove("d-none")
    // while (i<0) {

    //   i++
    // }
  }

  for (let i = 0; i < randWordArr.length; i++) {
    const charItem = document.getElementById(`charItem-${i}`);
    const element = randWordArr[i];

    if (charValue === element) {
      charItem.innerHTML = charValue;
    }
  }
  if (word.textContent === randWord) {
    win.innerHTML = "Nyertél";
  }

  badchars = [...new Set(badchars)];
  console.log(badchars);

  if (badchars.length >= 5) {
    lost.innerHTML = "vesztettél!";
  }

  char.value = "";
});

start.addEventListener("click", () => {
  console.log("teszt");
  svg1.classList.remove("d-none");
});
