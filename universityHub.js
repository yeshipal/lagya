function drawUniversityHub() {
   if (universityBgImage) {
    tint(255, 200); // Apply 80% opacity
    image(universityBgImage, 0, 0, width, height);
    noTint();
  } else {
    background(250); // fallback color
  }
  textAlign(CENTER, TOP);
  textSize(22);
  fill(30);
  text("🎓 Welcome to the Tibetan University", width / 2, 30);

  // --- Section Labels ---
  textSize(18);
  fill(0);
  text("Resources", 200, 270);
  text("Learning Tracks", 500, 270);

  // --- Resource Buttons ---
  drawButton(uniResource1Btn, "📜 Digital Skills for Tibetan Youth", [160, 120, 80]);
  drawButton(uniResource2Btn, "🗣️ Voices of Tibet: Journalism", [160, 120, 80]);

  // --- Learning Track Buttons ---
  drawButton(uniTraditionalBtn, "🧘 Traditional & Civic Studies", [85, 107, 47]);
  if (universityTasks.traditional) {
    text("✅", uniTraditionalBtn.x + uniTraditionalBtn.w - 30, uniTraditionalBtn.y + 15);
  }

  drawButton(uniModernBtn, "💻 Modern Disciplines", [70, 130, 180]);
  if (universityTasks.modern) {
    text("✅", uniModernBtn.x + uniModernBtn.w - 30, uniModernBtn.y + 15);
  }

  // --- Exit Button ---
  drawButton(universityExitBtn, "🚪 Exit to Village", [100, 100, 100]);

  // --- Badge Award ---
  if (universityTasks.traditional && universityTasks.modern && !universityComplete) {
    universityComplete = true;
    alert("🎉 You've graduated from the Tibetan University!");
  }
}
