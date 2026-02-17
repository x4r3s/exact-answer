const riddles = [
  {
    question: "What has keys but can't open locks?",
    correctAnswer: "piano",
    hints: ["It is a musical instrument.", "It has black and white keys."],
  },
  {
    question: "What has hands but cannot clap?",
    correctAnswer: "clock",
    hints: ["It shows time.", "You can hang it on a wall."],
  },
  {
    question: "What gets wetter the more it dries?",
    correctAnswer: "towel",
    hints: ["You use it after a shower.", "It absorbs water."],
  },
  {
    question: "What has a neck but no head?",
    correctAnswer: "bottle",
    hints: ["You can fill it with water.", "It is usually made of glass or plastic."],
  },
  {
    question: "What has one eye but cannot see?",
    correctAnswer: "needle",
    hints: ["It is used for sewing.", "Thread goes through it."],
  },
  {
    question: "What has many teeth but cannot bite?",
    correctAnswer: "comb",
    hints: ["You use it in front of a mirror.", "It helps fix your hair."],
  },
  {
    question: "What can travel around the world while staying in one corner?",
    correctAnswer: "stamp",
    hints: ["You put it on an envelope.", "It is used for sending letters."],
  },
  {
    question: "What has words but never speaks?",
    correctAnswer: "book",
    hints: ["You can read it.", "It has pages."],
  },
  {
    question: "What goes up but never comes down?",
    correctAnswer: "age",
    hints: ["It changes every birthday.", "It is a number about your life years."],
  },
  {
    question: "What has legs but cannot walk?",
    correctAnswer: "table",
    hints: ["It is a piece of furniture.", "You can eat dinner on it."],
  },
];

const MAX_TRIES = 3;

const gameState = {
  currentIndex: 0,
  score: 0,
  triesLeft: MAX_TRIES,
  isFinished: false,
  isTransitioning: false,
  pendingTimerId: null,
};

const ui = {
  questionNumber: document.getElementById("questionNumber"),
  score: document.getElementById("score"),
  triesCounter: document.getElementById("triesCounter"),
  riddle: document.getElementById("riddle"),
  hint: document.getElementById("hint"),
  input: document.getElementById("answerInput"),
  status: document.getElementById("status"),
  button: document.getElementById("checkButton"),
};

function getCurrentRiddle() {
  return riddles[gameState.currentIndex];
}

function setControlsDisabled(isDisabled) {
  ui.input.disabled = isDisabled;
  ui.button.disabled = isDisabled;
}

function clearPendingTransition() {
  if (gameState.pendingTimerId !== null) {
    clearTimeout(gameState.pendingTimerId);
    gameState.pendingTimerId = null;
  }
  gameState.isTransitioning = false;
}

function queueNextQuestion(delayMs) {
  clearPendingTransition();
  gameState.isTransitioning = true;
  setControlsDisabled(true);
  gameState.pendingTimerId = setTimeout(() => {
    gameState.pendingTimerId = null;
    gameState.isTransitioning = false;
    moveToNextQuestion();
  }, delayMs);
}

function renderCurrentQuestion() {
  const riddle = getCurrentRiddle();
  clearPendingTransition();
  ui.questionNumber.textContent = `${gameState.currentIndex + 1} / ${riddles.length}`;
  ui.score.textContent = `${gameState.score}`;
  ui.triesCounter.textContent = `${gameState.triesLeft}`;
  ui.riddle.textContent = riddle.question;
  ui.hint.textContent = "A hint appears after a mistake.";
  ui.status.textContent = `Tries left: ${gameState.triesLeft}`;
  ui.input.value = "";
  setControlsDisabled(false);
  ui.input.focus();
}

function showFinalScreen() {
  clearPendingTransition();
  gameState.isFinished = true;
  ui.questionNumber.textContent = `${riddles.length} / ${riddles.length}`;
  ui.score.textContent = `${gameState.score}`;
  ui.triesCounter.textContent = "0";
  ui.riddle.textContent = "You completed all riddles.";
  ui.hint.textContent = "Refresh the page to play again.";
  ui.status.textContent = "Thanks for playing!";
  setControlsDisabled(true);
}

function moveToNextQuestion() {
  gameState.currentIndex += 1;
  gameState.triesLeft = MAX_TRIES;

  if (gameState.currentIndex >= riddles.length) {
    showFinalScreen();
    return;
  }

  renderCurrentQuestion();
}

function checkAnswer() {
  if (gameState.isFinished || gameState.isTransitioning || gameState.triesLeft <= 0) {
    return;
  }

  const guessedAnswer = ui.input.value.trim().toLowerCase();
  const riddle = getCurrentRiddle();

  if (!guessedAnswer) {
    ui.status.textContent = "Type an answer. The field cannot be empty.";
    return;
  }

  if (guessedAnswer === riddle.correctAnswer) {
    gameState.score += 1;
    ui.score.textContent = `${gameState.score}`;
    ui.status.textContent = "Exactly right!";
    queueNextQuestion(900);
    return;
  }

  gameState.triesLeft -= 1;
  ui.triesCounter.textContent = `${gameState.triesLeft}`;

  if (gameState.triesLeft > 0) {
    const usedHints = MAX_TRIES - gameState.triesLeft;
    ui.hint.textContent = `Hint: ${riddle.hints[usedHints - 1]}`;
    ui.status.textContent = `Wrong answer. Tries left: ${gameState.triesLeft}`;
    ui.input.focus();
    return;
  }

  ui.hint.textContent = `Correct answer: ${riddle.correctAnswer}`;
  ui.status.textContent = "No tries left. Moving to the next question.";
  queueNextQuestion(1400);
}

ui.button.addEventListener("click", checkAnswer);
ui.input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    checkAnswer();
  }
});

renderCurrentQuestion();
