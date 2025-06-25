const ctaMissionBtn1 = { x: 260, y: 200, w: 300, h: 40 };
const ctaMissionBtn2 = { x: 260, y: 260, w: 300, h: 40 };
const ctaExitBtn = { x: 310, y: 320, w: 180, h: 40 };
function setupPosterButtons() {
  imageButtons = imageOptions.map((opt, i) => ({
    x: 60 + i * 140,
    y: 140,
    w: 100,
    h: 36,
    label: opt.label,
    key: opt.key
  }));
}


function drawCTAHub() {
  background(245);
  textAlign(CENTER, TOP);
  textSize(22);
  fill(30);
  text("🏛️ Central Tibetan Administration (CTA)", width / 2, 30);

  // --- Info Text ---
  textSize(16);
  textAlign(CENTER, TOP);
  text(
    "You now represent the voice of Tibetans in exile.\nTake part in key missions to support your people worldwide.",
    width / 2, 70
  );

  // --- Task Buttons ---
  drawButton(ctaMissionBtn1, "🌐 Campaign for Tibet's Freedom");
  drawButton(ctaMissionBtn2, "📢 Speak for Tibetans Inside Tibet");

  // --- Badge if complete ---
  if (ctaComplete) {
    drawBadge("🕊️", "Tibetan Representative", width / 2 - 90, 260);
  }

  // --- Exit Button ---
  drawButton(ctaExitBtn, "🚪 Exit to Village");
}
