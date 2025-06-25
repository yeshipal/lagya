const letterReferenceScroll = `
📜 FACTS ABOUT TIBET:
- Tibetans are denied basic religious freedom.
- Thousands of political prisoners remain detained.
- China's policies are suppressing Tibetan language and culture.
- International solidarity can amplify Tibetan voices.

Use this info to write a letter that reflects their situation.
`;

const letterTemplate = [
  "Dear World Leaders,",
  "",
  "I am writing to you because [BLANK_1] is suffering under [BLANK_2].",
  "Every day, their right to [BLANK_3] is violated.",
  "We urge the international community to [BLANK_4].",
  "",
  "Sincerely,",
  "[Your Name]"
];

function drawCTALetterTask() {
  background(250);
  textAlign(LEFT, TOP);
  textSize(18);
  fill(30);
  text("📝 Speak for Tibetans Inside Tibet", 30, 20);

  textSize(14);
  fill(0);

  let y = 60;
  for (let i = 0; i < letterTemplate.length; i++) {
    let line = letterTemplate[i];

    if (line.includes("[BLANK_")) {
      const blankIndex = parseInt(line.match(/\[BLANK_(\d)\]/)[1]) - 1;
      const before = line.split("[BLANK_")[0];
      text(before, 30, y);

      fill(255);
      stroke(180);
      rect(150, y - 2, 220, 20, 4);
      fill(0);
      noStroke();
      text(ctaLetterTask.inputs[blankIndex], 154, y);
    } else if (line === "[Your Name]") {
      fill(0);
      text("Tibetan Youth", 30, y);  // fixed placeholder name
    } else {
      fill(0);
      text(line, 30, y);
    }
    y += 28;
  }

  // Scroll on right
  drawScrollView(letterReferenceScroll, width - 260, 60, 220, 250);

  // Submit button
  drawButton({ x: width / 2 - 80, y: 340, w: 160, h: 40 }, "📬 Submit Letter");
}
function handleCTALetterClick() {
  // Submit button
  if (inside({ x: width / 2 - 80, y: 340, w: 160, h: 40 })) {
    if (ctaLetterTask.inputs.every(text => text.trim() !== "")) {
      alert("✅ Your letter has been submitted. Thank you for speaking up!");
      ctaTasks.letterSubmitted = true;
      gameState = "ctaHub";

      // Check if both tasks are done
      if (ctaTasks.posterCreated && ctaTasks.letterSubmitted) {
        ctaTasks.complete = true;
        // Optionally show badge or trigger mission complete message
      }
    } else {
      alert("⚠️ Please fill in all the blanks.");
    }
  }
}

