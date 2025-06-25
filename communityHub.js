function drawCommunityHub() {
  background(250);
  textAlign(CENTER, TOP);
  textSize(22);
  fill(30);
  text("🏘️ Welcome to the Community Center", width / 2, 30);

  // --- Left Resource Buttons ---
  drawButton(communityResourceBtn1, "📜 History of Tibetan Settlements");
  drawButton(communityResourceBtn2, "📊 Community Stats");

  // --- Right Task Button ---
  drawButton(communityContributeBtn, "🤝 Contribute to Your Community");

  // --- Exit Button ---
  drawButton(communityExitBtn, "🚪 Exit to Village");

  // ✅ Completion alert (optional)
  if (communityTasks.quizPassed && !communityComplete) {
     textSize(20);
  fill(0, 180, 0);
  text("✅", communityContributeBtn.x + communityContributeBtn.w - 20, communityContributeBtn.y + 20);
  }
}
function drawCommunityScroll() {
  const settlementText = `
Tibetan settlements in exile began in the early 1960s after the Chinese occupation of Tibet. With the support of the Indian government and international allies, the Central Tibetan Administration coordinated the development of structured communities focused on cultural preservation, education, and livelihood.

These settlements became centers of resilience and identity, where language, customs, and faith could thrive in exile. Schools, monasteries, agricultural cooperatives, and small industries helped create a sustainable life while preserving Tibet’s unique traditions.

Today, over 50 settlements exist across India, Nepal, and Bhutan. They serve not only as homes, but as living archives of Tibetan culture — built by the perseverance of the people in exile.
  `;

  drawScrollView(settlementText, () => gameState = "communityHub", "📜 History of Tibetan Settlements");
}

function drawCommunityStatsScroll() {
  const statsText = `
Since 1959, over 130,000 Tibetans have fled Tibet, forming resilient communities in exile. India remains the largest host, with 40+ settlements organized around schools, monasteries, farms, and cooperatives under the Central Tibetan Administration.

Nepal and Bhutan have long-standing settlements, while growing communities are now present in the US, Canada, Switzerland, France, the UK, Australia, and Japan.

Across the diaspora, Tibetans maintain cultural centers, weekend schools, and advocacy networks — all aimed at preserving identity and amplifying their voice.

🎯 Community Goals:
- Preserve Tibetan language, religion, and values
- Educate youth with leadership and global skills
- Promote cultural resilience through events, arts, and oral histories
- Advocate for human rights and Tibetan autonomy

📈 Quick Stats:
- 60+ schools in exile
- 50+ monasteries outside Tibet
- 20+ community-led media platforms

These efforts reflect a people’s determination to thrive in exile — rooted in tradition, yet reaching globally.
`;

  drawScrollView(statsText, () => gameState = "communityHub", "📊 Tibetan Migration & Community Stats");
}
