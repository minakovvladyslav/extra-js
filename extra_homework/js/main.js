window.addEventListener("load", () => {
  let countOfSteps = 0;
  document.addEventListener(`click`, documentActions);
  function documentActions(e) {
    const elementType = e.type;
    const targetElement = e.target;

    countOfSteps++;
    if (targetElement.closest(`.rabbit-exercise__button`)) {
      const userChooseAColumn = parseInt(
        prompt(`choose a column(available 1-2)`),
      );
      const userChooseARow = parseInt(prompt(`choose a row(available 1-2)`));
      const blockElements = document.querySelectorAll(`.rabbit-exercise_block`);
      const rabbitElement = document.querySelector(`.rabbit-exercise__img`);
      let messageForPlayer = ``;
      let cachet = 0;
      let points = 0;
      const spanElement = document.querySelector(`#gameSpan`);
      blockElements.forEach((item) => {
        item.style.backgroundColor = ``;
      });
      if (userChooseARow === 1 && userChooseAColumn === 1) {
        blockElements[0].style.backgroundColor = `red`;
        cachet = 1;
      } else if (userChooseAColumn === 2 && userChooseARow === 1) {
        blockElements[1].style.backgroundColor = `red`;
        cachet = 2;
      } else if (userChooseAColumn === 1 && userChooseARow === 2) {
        blockElements[2].style.backgroundColor = `red`;
        cachet = 3;
      } else if (userChooseAColumn === 2 && userChooseARow === 2) {
        blockElements[3].style.backgroundColor = `red`;
        cachet = 4;
      } else {
        alert(`Please choose from available rows and columns`);
        countOfSteps = countOfSteps === 1 ? 0 : 1;
      }
      let randomNumber = Math.floor(1 + Math.random() * 4);
      switch (randomNumber) {
        case 1:
          blockElements[0].insertAdjacentElement(`afterbegin`, rabbitElement);
          break;
        case 2:
          blockElements[1].insertAdjacentElement(`afterbegin`, rabbitElement);
          break;
        case 3:
          blockElements[2].insertAdjacentElement(`afterbegin`, rabbitElement);
          break;
        case 4:
          blockElements[3].insertAdjacentElement(`afterbegin`, rabbitElement);
          break;
      }
      if (randomNumber === cachet) {
        if (countOfSteps > 1) {
          points = 50;
        } else {
          points = 100;
        }
        messageForPlayer = `You won!`;
        countOfSteps = 0;
        blockElements.forEach((item) => {
          item.style.backgroundColor = ``;
        });
        blockElements[0].insertAdjacentElement(`afterbegin`, rabbitElement);
      } else {
        messageForPlayer = `Try it again`;
        if (countOfSteps >= 2) {
          blockElements.forEach((item) => {
            item.style.backgroundColor = ``;
          });
          messageForPlayer = `sorry you loss this game`;
          blockElements[0].insertAdjacentElement(`afterbegin`, rabbitElement);
          countOfSteps = 0;
        }
      }
      spanElement.textContent = `${points}`;
      alert(messageForPlayer);
    }
  }
});
