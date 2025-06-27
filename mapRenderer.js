/**
 * Draws the terrain map and the character on screen.
 * Handles 1x1 terrain tiles and 2x2 building tiles.
 */
function drawStartScreen() {
  if (startBgImage) {
    background(startBgImage);
  } else {
    background(245); // fallback color
  }
  fill(30);
  textAlign(CENTER, TOP);
  textSize(28);
  text("Journey of the Snowland", width / 2, 60);

  textSize(16);
  textAlign(LEFT, TOP);

  const introText = `
Welcome to *Journey of the Snowland*, an educational adventure game where you explore the life of a Tibetan exile. Travel through the village, visit core community institutions, and take part in cultural and civic tasks that reflect real-life experiences of Tibetans in exile. Learn, reflect, and contribute as you journey from school to monastery, from community to the Central Tibetan Administration.

Are you ready to begin your journey?
  `;

  const boxX = width / 2 - 280;
  const boxY = 120;
  const boxW = 560;
  const boxH = 220;

  // ✅ Add translucent background box behind text
  fill(255, 200); // white with slight transparency
  noStroke();
  rect(boxX - 10, boxY - 10, boxW + 20, boxH + 20, 12); // with padding and rounded corners

  // ✅ Draw text on top
  fill(30);
  textLeading(24);
  text(introText, boxX, boxY, boxW);

  // Draw Start Button
//  console.log(mouseX, mouseY); // in mousePressed

  drawButton({ x: width / 2 - 60, y: height / 2 + 100, w: 120, h: 40 }, "Start Journey");
}



function drawMapScene() {
  for (let r = 0; r < mapRows; r++) {
    for (let c = 0; c < mapCols; c++) {
      let terrain = terrainMap[r][c];
      if (terrain === -1) continue; // filler space in multi-tile buildings

      let img = terrainImages[terrain];
      if (img) {
        if ([4, 5, 6, 7, 8].includes(terrain)) {
          // Building tiles (2x2 visuals)
          image(img, c * tileSize, r * tileSize, tileSize * 2, tileSize * 2);
        } else {
          // Regular tiles
          image(img, c * tileSize, r * tileSize, tileSize, tileSize);
        }
      } else {
        // Fallback tile rendering
        fill(200);
        rect(c * tileSize, r * tileSize, tileSize, tileSize);
      }
    }
  }

  // Draw the character
  image(character.img, playerTile.col * tileSize, playerTile.row * tileSize, character.size, character.size);
}

/**
 * Displays a prompt box asking if the player wants to enter the Tibetan School.
 * Triggered when the player steps onto the school building.
 */
function drawSchoolPrompt() {
  drawPromptBox("Do you want to complete your schooling at the Tibetan School?");
}

function drawMonasteryPrompt() {
   drawPromptBox("Do you want to enter the Tibetan Monastery for teachings and reflection?");
}

function drawUniversityPrompt() {
  drawPromptBox("You’ve arrived at the Tibetan University.\nHere, you’ll develop both wisdom and skills to serve your community and engage with the world.\nChoose your path.");
}

function drawCommunityPrompt() {
  const text = "You’ve reached the Community Center.\n\nWould you like to enter and engage with local activities and projects?";
  drawPromptBox(text, "Enter", "Skip");
}

function drawCTAPrompt() {
  const msg = "🕊️ You’ve shown dedication across our community pillars. The CTA now invites you to take action on behalf of Tibetans everywhere.\nAre you ready?";
  drawPromptBox(msg);
}

function drawCTANotReadyPrompt() {
  const msg = "📣 Before representing your people, learn from them.\nVisit our schools, monasteries, university, and community centers to deepen your understanding.";
  drawPromptBox(msg, "Okay", ""); // Only show "Okay" button
}

