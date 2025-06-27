function preload() {
  // Load character image
  character = {
    img: loadImage("assets/character.png"),
    size: tileSize
  };
  
  // Load sounds
    startMusic = loadSound('assets/sounds/Techung-dranyen2.m4a');
  // Load terrain images
  startBgImage = loadImage("assets/start-bg.png");
  schoolBgImage = loadImage("assets/backgrounds/schoolhub-bg.png");
  monasteryBgImage = loadImage("assets/backgrounds/monasteryhub-bg.png");
  communtiyBgImage = loadImage("assets/backgrounds/communityhub-bg.png");
  universityBgImage = loadImage("assets/backgrounds/universityhub-bg.png");
  ctaBgImage = loadImage("assets/backgrounds/ctahub-bg.png");
  terrainImages[terrainTypes.TREE] = loadImage("assets/tree.png");
  terrainImages[terrainTypes.MOUNTAIN] = loadImage("assets/mountain.png");
  terrainImages[terrainTypes.PATH_VERTICAL] = loadImage("assets/vertical-path.png");
  terrainImages[terrainTypes.PATH_HORIZONTAL] = loadImage("assets/horizontal-path.png");
  terrainImages[terrainTypes.BUILDING_SCHOOL] = loadImage("assets/tibetan-school.png");
  terrainImages[terrainTypes.BUILDING_COMMUNITY] = loadImage("assets/tibetan-settlement.png");
  terrainImages[terrainTypes.BUILDING_GOVT] = loadImage("assets/CTA.png");
  terrainImages[terrainTypes.BUILDING_UNI] = loadImage("assets/tibetan-university.png");
  terrainImages[terrainTypes.BUILDING_MONA] = loadImage("assets/monastery.png");
  terrainImages[terrainTypes.Q1_PATH] = loadImage("assets/0-90-path.png");
  terrainImages[terrainTypes.Q2_PATH] = loadImage("assets/90-180-path.png");
  terrainImages[terrainTypes.Q3_PATH] = loadImage("assets/180-270-path.png");
  terrainImages[terrainTypes.Q4_PATH] = loadImage("assets/270-0-path.png");
  terrainImages[terrainTypes.T_PATH] = loadImage("assets/t-path.png");
  terrainImages[terrainTypes.T1_PATH] = loadImage("assets/t1-path.png");

  // Poster Images
  posterImages.freedom = loadImage("assets/freedom-tibet.png");
  posterImages.potala = loadImage("assets/potala.png");
  posterImages.flag = loadImage("assets/tibetan-flag.png");
}

function setup() {
  createCanvas(tileSize * mapCols, tileSize * mapRows);

  // Define the terrain map layout
  terrainMap = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [2, 0, 1, 1, 0, 4, -1, 1, 0, 1, 0, 1],
    [9, 3, 3, 3, 3, -1, -1, 0, 0, 0, 5, -1],
    [0, 0, 1, 0, 0, 14, 3, 3, 11, 0, -1, -1],
    [1, 0, 0, 8, -1, 10, 0, 0, 9, 13, 10, 1],
    [1, 1, 0, -1, -1, 0, 0, 0, 1, 2, 0, 1],
    [6, -1, 0, 0, 1, 0, 1,7, -1, 10, 0, 1],
    [-1, -1, 3, 3, 3, 3, 3, -1, -1, 0, 1, 1]
  ];

  // Populate images
  imageButtons = imageOptions.map((opt, i) => ({
    label: opt.label,
    x: 80 + i * 120,
    y: 160,
    w: 100,
    h: 60
  }));
}

function draw() {
  if (showStartScreen) {
    drawStartScreen(); // Show welcome screen
    return;
  }

  background(220);

  switch (gameState) {
    case "map":
      drawMapScene();
      break;

    case "schoolPrompt":
      drawMapScene();
      drawSchoolPrompt();
      break;

    case "monasteryPrompt":
      drawMapScene();
      drawMonasteryPrompt();
      break;

    case "schoolHub":
      drawSchoolHub();
      break;

    case "monasteryHub":
      drawMonasteryHub();
      break;

    case "tibetanQuiz":
      drawTibetanQuiz();
      break;

    case "csQuiz":
      drawCSQuiz();
      break;

    case "monasteryQuiz":
      drawMonasteryQuiz();
      break;

    case "monasteryScroll":
      drawMonasteryScroll();
      break;

    case "universityPrompt":
      drawMapScene();
      drawUniversityPrompt();
      break;

    case "universityHub":
      drawUniversityHub();
      break;

    case "universityQuizA":
    case "universityQuizB":
      drawUniversityQuiz();
      break;

    case "communityPrompt":
      drawMapScene();
      drawCommunityPrompt();
      break;

    case "communityHub":
      drawCommunityHub();
      break;

    case "communityScroll":
      drawCommunityScroll();
      break;

    case "communityQuiz":
      drawCommunityQuiz();
      break;

    case "communityStatsScroll":
      drawCommunityStatsScroll();
      break;

    case "ctaPrompt":
      drawMapScene();
      drawCTAPrompt();
      break;

    case "ctaNotReadyPrompt":
      drawMapScene();
      drawCTANotReadyPrompt();
      break;

    case "ctaHub":
      drawCTAHub();
      break;

    case "ctaPosterTask":
      drawCTAPosterTask();
      break;

    case "ctaLetterTask":
      drawCTALetterTask();
      break;
  }
}


function mousePressed() {
  // Handle Start Screen button
   if (showStartScreen) {
    if (inside({ x: width / 2 - 60, y: height / 2 + 100, w: 120, h: 40 })) {
       if (startMusic && !startMusic.isPlaying()) {
        startMusic.setVolume(0.15);
        startMusic.loop();  // 🎵 Start music
      }
      showStartScreen = false;
      gameState = "map"; // Start the game
    }
    return; // prevent processing below if still in start screen
  }
 
  // Handle entry prompts
  switch (gameState) {
    case "schoolPrompt":
    case "monasteryPrompt":
    case "universityPrompt":
    case "communityPrompt":
    case "ctaPrompt":
    case "ctaNotReadyPrompt":
      handleEntryPromptClick();
      break;

    // Hubs
    case "schoolHub":
      handleSchoolHubClick();
      break;
    case "monasteryHub":
      handleMonasteryHubClick();
      break;
    case "universityHub":
      handleUniversityHubClick();
      break;
    case "communityHub":
      handleCommunityHubClick();
      break;
    case "ctaHub":
      handleCTAHubClick();
      break;

    // Quizzes and Scrolls
    case "monasteryQuiz":
      handleMonasteryQuizClick();
      break;
    case "universityQuizA":
    case "universityQuizB":
      handleUniversityQuizClick();
      break;
    case "communityQuiz":
      handleCommunityQuizClick();
      break;

    case "monasteryScroll":
      handleMonasteryScrollClick();
      break;
    case "communityScroll":
      handleCommunityScrollClick();
      break;
    case "communityStatsScroll":
      handleCommunityStatsScrollClick();
      break;

    // CTA Tasks
    case "ctaPosterTask":
      handleCTAPosterClick();
      break;
    case "ctaLetterTask":
      handleCTALetterClick();
      break;
  }

}

function handleEntryPromptClick() {
  if (gameState === "ctaNotReadyPrompt") {
    gameState = "map"; // Just exit
  } else if (inside(yesBtn)) {
    if (gameState === "schoolPrompt") gameState = "schoolHub";
    else if (gameState === "monasteryPrompt") gameState = "monasteryHub";
    else if (gameState === "universityPrompt") gameState = "universityHub";
    else if (gameState === "communityPrompt") gameState = "communityHub";
    else if (gameState === "ctaPrompt") gameState = "ctaHub"; // Ready for CTA hub
  } else if (inside(noBtn)) {
    gameState = "map";
  }
}



function handleSchoolHubClick() {
  if (inside(resourceBtn)) {
    setTimeout(() => {
      window.open("https://www.youtube.com/watch?v=2LA8cXF7RiI", "_blank", "noopener");
    }, 1);
  } else if (inside(tibetanTestBtn)) {
    gameState = "tibetanQuiz";
  } else if (inside(csTestBtn)) {
    gameState = "csQuiz";
  } else if (inside(exitBtn)) {
    gameState = "map";
  }
}

function handleMonasteryHubClick() {
  if (inside(prayerResourceBtn)) {
    gameState = "monasteryScroll";
  } else if (inside(prayerPracticeBtn)) {
    quizState = {
      currentIndex: 0,
      selectedQuestions: shuffle([...dalaiLamaQuestions]).slice(0, 3),
      score: 0
    };
    gameState = "monasteryQuiz";
  } else if (inside(monasteryExitBtn)) {
    gameState = "map";
  }
}

function handleMonasteryQuizClick() {
  const q = quizState.selectedQuestions[quizState.currentIndex];
  for (let i = 0; i < 3; i++) {
    if (mouseY > 180 + i * 60 && mouseY < 220 + i * 60) {
      if (i === q.answer) quizState.score++;
      quizState.currentIndex++;

      if (quizState.currentIndex >= 3) {
        if (quizState.score === 3) {
          alert("✅ You passed the Tibetan Values Quiz!");
          monasteryTasks.quizPassed = true;
        } else {
          alert("❌ Try again. You need all 3 correct.");
        }
        gameState = "monasteryHub";
      }
      break;
    }
  }
}

function handleMonasteryScrollClick() {
  if (
    mouseX > width / 2 - 60 &&
    mouseX < width / 2 + 60 &&
    mouseY > height - 80 &&
    mouseY < height - 40
  ) {
    gameState = "monasteryHub";
  }
}
function handleUniversityHubClick() {
  if (inside(uniResource1Btn)) {
    alert("Digital Skills for Tibetan Youth summary coming soon!");
  } else if (inside(uniResource2Btn)) {
    alert("Voices of Tibet: Journalism & Expression");
  } else if (inside(uniTraditionalBtn)) {
    universityQuizState.track = 'A';
    universityQuizState.currentIndex = 0;
    universityQuizState.score = 0;
    universityQuizState.selectedQuestions = shuffle([...trackAQuestions]).slice(0, 2);
    gameState = "universityQuizA";
  } else if (inside(uniModernBtn)) {
    universityQuizState.track = 'B';
    universityQuizState.currentIndex = 0;
    universityQuizState.score = 0;
    universityQuizState.selectedQuestions = shuffle([...trackBQuestions]).slice(0, 2);
    gameState = "universityQuizB";
  } else if (inside(universityExitBtn)) {
    gameState = "map";
  }
}


function handleUniversityQuizClick() {
  const q = universityQuizState.selectedQuestions[universityQuizState.currentIndex];

  for (let i = 0; i < 3; i++) {
    if (mouseY > 180 + i * 60 && mouseY < 220 + i * 60) {
      if (i === q.answer) universityQuizState.score++;
      universityQuizState.currentIndex++;

      if (universityQuizState.currentIndex >= 2) {
        if (universityQuizState.score === 2) {
          if (gameState === "universityQuizA") {
            universityTasks.traditional = true;
            alert("✅ You passed the Civic & Wisdom Track!");
          } else if (gameState === "universityQuizB") {
            universityTasks.modern = true;
            alert("✅ You passed the Digital Advocacy Track!");
          }
        } else {
          alert("❌ You need both answers correct. Try again.");
        }

        // Check graduation
        if (universityTasks.traditional && universityTasks.modern && !universityComplete) {
          universityComplete = true;
          alert("🎓 You’ve graduated from the Tibetan University!");
        }

        gameState = "universityHub";
      }

      break;
    }
  }
}
function handleCommunityHubClick() {
  if (inside(communityResourceBtn1)) {
    gameState = "communityScroll"; // 📜 Tibetan settlement history scroll
  } 
  
  else if (inside(communityResourceBtn2)) {
    gameState = "communityStatsScroll"; // 📊 Stats scroll (you'll implement this view)
  } 
  
  else if (inside(communityContributeBtn)) {
    communityQuizState = {
    currentIndex: 0,
    selectedQuestions: shuffle([...communityQuestions]).slice(0, 2),
    score: 0
  };
    gameState = "communityQuiz";
  } 
  
  else if (inside(communityExitBtn)) {
    gameState = "map";
  }
}


function handleCommunityScrollClick() {
  if (
    mouseX > width / 2 - 60 &&
    mouseX < width / 2 + 60 &&
    mouseY > height - 80 &&
    mouseY < height - 40
  ) {
    gameState = "communityHub";
  }
}
function handleCommunityStatsScrollClick() {
  if (
    mouseX > width / 2 - 60 &&
    mouseX < width / 2 + 60 &&
    mouseY > height - 80 &&
    mouseY < height - 40
  ) {
    gameState = "communityHub";
  }
}
function handleCTAHubClick() {
  if (inside(ctaMissionBtn1)) {
    gameState = "ctaPosterTask";
  } else if (inside(ctaMissionBtn2)) {
    ctaTasks.mission2 = true;
    gameState = "ctaLetterTask";
  } else if (inside(ctaExitBtn)) {
    gameState = "map";
  }

  // Check if both missions complete
  if (ctaTasks.mission1 && ctaTasks.mission2 && !ctaComplete) {
    ctaComplete = true;
    alert("🎖️ You are now a Tibetan Representative!\nThank you for completing your civic journey.");
  }

}
function handleCTAPosterClick() {
  sloganButtons.forEach((btn, i) => {
    if (inside(btn)) posterTask.selectedSlogan = i;
  });

  imageButtons.forEach((btn, i) => {
    if (inside(btn)) posterTask.selectedImage = i;
  });

  if (inside(posterFinalizeBtn) &&
      posterTask.selectedSlogan !== null &&
      posterTask.selectedImage !== null) {
    posterTask.finalized = true;
    ctaTasks.posterCreated = true;
    alert("📢 Your poster is ready to share on Instagram!\n🕊️ Amplify Tibetan voices.");
    gameState = "ctaHub";
  }
}

function keyPressed() {
  if (gameState === "tibetanQuiz" || gameState === "csQuiz") {
    keyPressedQuizHandler(key);
  } else if (gameState === "ctaLetterTask") {
    if (keyCode === BACKSPACE) {
      if (letterInput.activeField === "name" && letterInput.name.length > 0) {
        letterInput.name = letterInput.name.slice(0, -1);
      } else if (letterInput.activeField === "message" && letterInput.message.length > 0) {
        letterInput.message = letterInput.message.slice(0, -1);
      }
    } else if (keyCode === ENTER) {
      // Optional: Add newline to message field
      if (letterInput.activeField === "message") {
        letterInput.message += '\n';
      }
    }
  } else {
    handleMovementKey(keyCode);
  }
}
function keyTyped() {
  if (gameState === "ctaLetterTask") {
    // Add typed character to letter content
    if (letterInput.activeField === "name") {
      letterInput.name += key;
    } else if (letterInput.activeField === "message") {
      letterInput.message += key;
    }
  }
}


function drawPromptBox(promptText, yesLabel = "Yes", noLabel = "No") {
  const boxX = width / 2 - 220;
  const boxY = height / 2 - 100;
  const boxW = 440;
  const boxH = 200;

  // --- Prompt Box ---
  fill(255);
  stroke(0);
  strokeWeight(2);
  rect(boxX, boxY, boxW, boxH, 10);

  // --- Prompt Text ---
  noStroke();
  fill(0);
  textSize(16);
  textAlign(LEFT, TOP);
  textLeading(22);
  text(promptText, boxX + 20, boxY + 20, boxW - 40);

  // --- Yes Button (if provided) ---
  if (yesLabel) {
    fill(100, 200, 100);
    rect(yesBtn.x, yesBtn.y, yesBtn.w, yesBtn.h, 10);
    fill(255);
    textSize(16);
    textAlign(CENTER, CENTER);
    text(yesLabel, yesBtn.x + yesBtn.w / 2, yesBtn.y + yesBtn.h / 2);
  }

  // --- No Button (if provided) ---
  if (noLabel) {
    fill(200, 100, 100);
    rect(noBtn.x, noBtn.y, noBtn.w, noBtn.h, 10);
    fill(255);
    textSize(16);
    textAlign(CENTER, CENTER);
    text(noLabel, noBtn.x + noBtn.w / 2, noBtn.y + noBtn.h / 2);
  }
}

function drawButton(btn, label, fillColor = [100, 150, 200]) {
  fill(...fillColor);
  rect(btn.x, btn.y, btn.w, btn.h, 12);

  fill(255);
  textSize(16);
  textAlign(CENTER, CENTER);
  text(label, btn.x + btn.w / 2, btn.y + btn.h / 2);
}

