function drawCTAPosterTask() {
  background(255, 245, 230);
  fill(20);
  textAlign(CENTER, TOP);
  textSize(22);
  text("🎨 Create a Digital Advocacy Poster", width / 2, 20);

  // === Slogan Selection ===
  textSize(16);
  text("Choose a slogan:", width / 2, 60);
  sloganButtons.forEach((btn, i) => {
    fill(posterTask.selectedSlogan === i ? "#2e7d32" : "#555");
    rect(btn.x, btn.y, btn.w, btn.h, 8);
    fill(255);
    textSize(13);
    textAlign(CENTER, CENTER);
    text(btn.label, btn.x + btn.w / 2, btn.y + btn.h / 2);
  });

  // === Image Selection ===
  fill(30);
  textSize(16);
  text("Choose an image:", width / 2, 130);
  for (let i = 0; i < imageButtons.length; i++) {
    const btn = imageButtons[i];
    const img = posterImages[imageOptions[i].key];
    
    // Border highlight
    stroke(posterTask.selectedImage === i ? "#1565c0" : "#aaa");
    strokeWeight(3);
    noFill();
    rect(btn.x - 2, btn.y - 2, btn.w + 4, btn.h + 4, 8);
    noStroke();

    // Thumbnail
    if (img) {
      image(img, btn.x, btn.y, btn.w, btn.h);
    } else {
      fill(200);
      rect(btn.x, btn.y, btn.w, btn.h, 8);
    }

    // Label
    fill(30);
    textSize(12);
    textAlign(CENTER, TOP);
    text(imageOptions[i].label, btn.x + btn.w / 2, btn.y + btn.h + 5);
  }

  // === Finalize Button ===
  posterFinalizeBtn.y = 280;
  drawButton(posterFinalizeBtn, "✅ Finalize Poster");

  // === Poster Preview ===
  if (posterTask.selectedSlogan !== null && posterTask.selectedImage !== null) {
    const imgKey = imageOptions[posterTask.selectedImage].key;
    const previewImg = posterImages[imgKey];

    const previewX = width / 2 - 120;
    const previewY = 340;
    const previewW = 240;
    const previewH = 150;

    imageMode(CORNER);
    image(previewImg, previewX, previewY, previewW, previewH);

    // Overlay Slogan
    fill(255, 230);
    rect(previewX, previewY + 55, previewW, 40, 8);
    fill("#d32f2f");
    textSize(16);
    textAlign(CENTER, CENTER);
    text(sloganOptions[posterTask.selectedSlogan], width / 2, previewY + 75);
  }
}
