let tibetanQuestions = [
  {
    question: "What is the Tibetan word for 'Thank You'?",
    options: ["Tashi Delek", "Thuk-je-che", "Ka-le-pe"],
    correct: "B"
  },
  {
    question: "Which script is used in Tibetan writing?",
    options: ["Devanagari", "Uchen", "Latin"],
    correct: "B"
  },
  {
    question: "What does 'Tashi Delek' mean?",
    options: ["Good luck", "Thank you", "Hello"],
    correct: "A"
  },
  {
    question: "How many root letters are in the Tibetan alphabet?",
    options: ["26", "30", "42"],
    correct: "B"
  },
  {
    question: "What is Losar?",
    options: ["Harvest festival", "New Year", "Buddha's Birthday"],
    correct: "B"
  }
];

let csQuestions = [
  {
    question: "In Scratch, which block starts a program?",
    options: ["'when green flag clicked'", "'repeat 10'", "'say Hello!'"],
    correct: "A"
  },
  {
    question: "What is a 'loop' used for?",
    options: ["To repeat actions", "To create sound", "To change color"],
    correct: "A"
  },
  {
    question: "Which of these is a conditional block?",
    options: ["'if then'", "'forever'", "'wait 1 sec'"],
    correct: "A"
  },
  {
    question: "What is 'debugging'?",
    options: ["Running fast", "Fixing errors", "Making sounds"],
    correct: "B"
  },
  {
    question: "Which block helps make decisions in code?",
    options: ["'if'", "'say'", "'repeat'"],
    correct: "A"
  }
];

// These will hold the selected questions during the session
let selectedTibetanQuestion;
let selectedCSQuestion;

function drawTibetanQuiz() {
  background(250);
  fill(30);
  textAlign(CENTER);
  textSize(20);
  text("📘 Tibetan Language Quiz", width / 2, 60);

  if (selectedTibetanQuestion) {
    textSize(16);
    text("Q: " + selectedTibetanQuestion.question, width / 2, 120);
    text("A. " + selectedTibetanQuestion.options[0], width / 2, 160);
    text("B. " + selectedTibetanQuestion.options[1], width / 2, 200);
    text("C. " + selectedTibetanQuestion.options[2], width / 2, 240);
    textSize(14);
    text("Press A, B, or C to answer", width / 2, 300);
  }
}

function drawCSQuiz() {
  background(250);
  fill(30);
  textAlign(CENTER);
  textSize(20);
  text("💻 Computer Science Quiz", width / 2, 60);

  if (selectedCSQuestion) {
    textSize(16);
    text("Q: " + selectedCSQuestion.question, width / 2, 120);
    text("A. " + selectedCSQuestion.options[0], width / 2, 160);
    text("B. " + selectedCSQuestion.options[1], width / 2, 200);
    text("C. " + selectedCSQuestion.options[2], width / 2, 240);
    textSize(14);
    text("Press A, B, or C to answer", width / 2, 300);
  }
}

/**
 * Handles keyboard input when user is in a quiz.
 * @param {string} key The key pressed.
 */
function keyPressedQuizHandler(key) {
  let answer = key.toUpperCase();
  if (answer !== "A" && answer !== "B" && answer !== "C") return;

  if (gameState === "tibetanQuiz" && selectedTibetanQuestion) {
    if (answer === selectedTibetanQuestion.correct) {
      alert("Correct! 🎉 You’ve earned the School Badge.");
      schoolTests.tibetan = true;  // ✅ Set completion flag
      gameState = "schoolHub";
    } else {
      alert("Oops! That's not correct. Try again.");
    }
  }

  else if (gameState === "csQuiz" && selectedCSQuestion) {
    if (answer === selectedCSQuestion.correct) {
      alert("Correct! 💻 You've completed the CS quiz.");
      schoolTests.cs = true;  // ✅ Set completion flag
      gameState = "schoolHub";
    } else {
      alert("Not quite. Give it another go.");
    }
  }
}


