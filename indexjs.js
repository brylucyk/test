// --- create words to fill the background
const words = ["function(e)", "< / body >", "< / p >", "< br >", "< / div >", "< title >", "if(wordsRight[i].offsetLeft === movePos", "< em >", "< head >", "< body >", "if(inLeftDiv === false)", "< html >", "< / head >", "< / script >", "container.appendChild(word);", "if(pos.x > inner)", "var movePos = 1;", "Math.floor(Math.random() * (screen.width)", "word.style.width"];

function createWords() {
  // --- generate words in a random location
  for(var i = 0; i < words.length; ++i) {
    let wordStartX = Math.floor(Math.random() * screen.height);
    let wordStartY = Math.floor(Math.random() * screen.width);
    let word = document.createElement('div');

    word.innerHTML = words[i];
    word.className = "code";
    word.style = "position: absolute; top: " + wordStartX + "px; left: " + wordStartY + "px;";
    container.appendChild(word);
  }
  pageEffects();
}

// call functions for page fade-in effects
  var timer = 0;
  function pageEffects() {

  // --- arbitary numbers based on what looked best :)
    ++timer;

    if(timer < 40) {
      setTimeout(createWords, 60);
      setTimeout(changeOpacity, 60);
    }

    if(timer === 40) {
      hideCode();
    }
  }

// --- fade in background & main text
  var bgOpacityIncrease = 0;
  var textOpacityIncrease = 0;

  function changeOpacity() {
    let background = document.getElementById("background");
    let comingSoon = document.getElementById("coming-soon");

    background.style.opacity = bgOpacityIncrease;
    comingSoon.style.opacity = textOpacityIncrease;
    bgOpacityIncrease += .03;
    textOpacityIncrease += .02;
  }

// --- hide code words once the background has faded in & call function to change font color
  function hideCode() {
      let codeWords = document.getElementsByClassName("code");

      for(let i = 0; i < codeWords.length; ++i) {
        codeWords[i].style = "display: none;";
      }

      changeFontColor();
  }
