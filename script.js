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
let counter = 1;

const start = document.getElementById("start");
const svgFrame = document.getElementById("Frame_1");

function addDnoneClass(i) {
  const svg = document.getElementById(`Vector_${i}`);
  return svg.classList.add("d-none");
}

function removeDnoneClass(i) {
  const svg = document.getElementById(`Vector_${i}`);
  return svg.classList.remove("d-none");
}

for (let i = 1; i < svgFrame.children.length; i++) {
  addDnoneClass(i);
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

  if (randWordArr[charIndex] !== charValue) {
    badchars.push(charValue);
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

  if (badchars.length === 11) {
    lost.innerHTML = "vesztettél!";
  }

  while (badchars.length + 1 > counter) {
    removeDnoneClass(counter);

    if (counter === 6) {
      removeDnoneClass(6);

      setTimeout(() => {
        removeDnoneClass(7);
        removeDnoneClass(8);
      }, 2000);

      // EYES
      setInterval(() => {
        const add = setTimeout(() => {
          addDnoneClass(7);
          addDnoneClass(8);
        }, 10);

        setTimeout(() => {
          setTimeout(() => {
            addDnoneClass(7);
            addDnoneClass(8);
          }, 10);
          clearTimeout(add);
          setTimeout(() => {
            removeDnoneClass(7);
            removeDnoneClass(8);
          }, 10);
        }, 10);
      }, 5000);

      // MOUTH
      const timer = setTimeout(removeDnoneClass(9), 1000);
      setTimeout(() => {
        clearTimeout(timer);
        addDnoneClass(9);
      }, 4000);

      setTimeout(removeDnoneClass(15), 7000);
    }
    counter++;
    
    if (counter > 6) {
      let counter_2 = counter + 2;
      removeDnoneClass(counter_2);
    }
    if (counter > 9) {
      addDnoneClass(9)
    }

    console.log(badchars.length)
  }


  char.value = "";
});
