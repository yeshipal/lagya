function drawTibetanQuiz() {
  background(250);

  fill(30);
  textAlign(CENTER);
  textSize(20);
  text("📘 Tibetan Language Quiz", width / 2, 60);

  textSize(16);
  text("Question 1: What is the Tibetan word for 'Thank You'?", width / 2, 120);
  text("A. Tashi Delek", width / 2, 160);
  text("B. Thuk-je-che", width / 2, 200);
  text("C. Ka-le-pe", width / 2, 240);

  textSize(14);
  text("Press A, B, or C to answer", width / 2, 300);
}

function drawCSQuiz() {
  background(250);

  fill(30);
  textAlign(CENTER);
  textSize(20);
  text("💻 Computer Science Quiz", width / 2, 60);

  textSize(16);
  text("Q: In Scratch, which block starts a program?", width / 2, 120);
  text("A. 'when green flag clicked'", width / 2, 160);
  text("B. 'repeat 10'", width / 2, 200);
  text("C. 'say Hello!'", width / 2, 240);

  textSize(14);
  text("Press A, B, or C to answer", width / 2, 300);
}

/**
 * Handles keyboard input when user is in a quiz.
 * @param {string} key The key pressed.
 */
function keyPressedQuizHandler(key) {
  if (gameState === "tibetanQuiz") {
    const answer = key.toLowerCase();
    if (answer === 'b') {
      alert("✅ Correct! 'Thuk-je-che' means Thank You.");
      schoolTests.tibetan = true;
    } else {
      alert("❌ Try again. Correct answer is 'Thuk-je-che'.");
    }
    gameState = "schoolHub";

  } else if (gameState === "csQuiz") {
    const answer = key.toLowerCase();
    if (answer === 'a') {
      alert("✅ Correct! The program starts with 'when green flag clicked'.");
      schoolTests.cs = true;
    } else {
      alert("❌ Try again. You can return to the quiz later.");
    }
    gameState = "schoolHub";
  }
}
