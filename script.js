// async function getFruits() {
//   const response = await fetch('https://fakestoreapi.com/products');
//   const data = await response.json();
//   console.log(data);
// }
// getFruits();

const wordArr = ["apple"];
const randWord = wordArr[Math.floor(Math.random() * wordArr.length)];
const word = document.getElementById("word");
const char = document.getElementById("char");
const error = document.getElementById("error");
const win = document.getElementById("win");
const lost = document.getElementById("lost");
const randWordArr = [];
const currentWordArr = [];
let badChars = [];
let allChars = [];
let newRandArr = [];
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

for (let i = 0; i < randWordArr.length; i++) {
  const randChar = randWordArr[i];
  newRandArr.push(randChar);
}

//----- START button addEventLisener
start.addEventListener("click", () => {
  if (confirm("Are you sure you want to start a new game?")) {
    document.location.reload();
  }
});

//----- KEYUP addEventLisener
char.addEventListener("keyup", () => {
  charValue = char.value;
  error.innerHTML = "";

  allChars.push(charValue);

  const charIndex = randWordArr.findIndex((e) => {
    return e === charValue;
  });

  if (randWordArr[charIndex] !== charValue) {
    badChars.push(charValue);
  }

  for (let i = 0; i < randWordArr.length; i++) {
    const charItem = document.getElementById(`charItem-${i}`);
    const element = randWordArr[i];

    if (charValue === element) {
      charItem.innerHTML = charValue;
      currentWordArr.push(charValue);
    }
  }

  // WIN GAME
  if (word.textContent === randWord) {
    win.classList.add("winGame");
    win.innerHTML = "You Win!";
    char.classList.add("d-none");
    word.classList.add("charColorGreen")

    for (let i = 1; i < 20; i++) {
      console.log(i);
      addDnoneClass(i);
    }
    return setInterval(() => {
      addDnoneClass(7);
      addDnoneClass(8);
    }, 1);
  }

  badChars = [...new Set(badChars)];

  console.log(badChars);

  // ERROR
  for (let i = 0; i < badChars.length; i++) {
    const badChar = badChars[i];
    error.innerHTML += `<span class="mx-1 charColorRed">${badChar}</span>`;
  }

  const filterItem = newRandArr.filter((e) => {
    return e !== charValue;
  });

  newRandArr = [];

  for (let i = 0; i < filterItem.length; i++) {
    const item = filterItem[i];
    newRandArr.push(item);
  }

  // LOST GAME
  if (badChars.length > 10) {
    lost.innerHTML = "Game over!";
    lost.classList.add("lostGame");

    for (let i = 0; i < word.children.length; i++) {
      const element = word.children[i];

      if (!element.innerHTML) {
        element.innerHTML += `<div class='mx-2 charColorRed'>${randWordArr[i]}</div>`;
      }
    }

    char.classList.add("d-none");
    removeDnoneClass(14);
    removeDnoneClass(16);
    removeDnoneClass(17);
    removeDnoneClass(18);
    removeDnoneClass(19);
  }

  if (badChars.length < 11) {
    while (badChars.length + 1 > counter) {
      removeDnoneClass(counter);

      if (counter === 6) {
        removeDnoneClass(6);

        setTimeout(() => {
          removeDnoneClass(7);
          removeDnoneClass(8);
        }, 800);

        // EYES
        const eyesInterval = setInterval(() => {
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
            const removeTimer = setTimeout(() => {
              if (badChars.length === 11) {
                clearTimeout(removeTimer);
                addDnoneClass(7);
                addDnoneClass(8);
              } else {
                removeDnoneClass(7);
                removeDnoneClass(8);
              }
            }, 10);
          }, 10);
        }, 5000);

        // MOUTH
        const timer = setTimeout(removeDnoneClass(9), 1000);
        setTimeout(() => {
          clearTimeout(timer);
          addDnoneClass(9);
        }, 2000);

        setTimeout(removeDnoneClass(15), 7000);
      }
      counter++;

      if (counter > 6) {
        let counter_2 = counter + 2;
        removeDnoneClass(counter_2);
      }
      if (counter > 9) {
        addDnoneClass(9);
      }
    }
    char.value = "";
  } else {
    char.value = "";
    return setInterval(() => {
      addDnoneClass(7);
      addDnoneClass(8);
    }, 1);
  }
});
