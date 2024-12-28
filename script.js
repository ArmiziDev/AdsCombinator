// script.js

// Number of ads to generate (e.g., 18).
const NUM_ADS = 18;

// A helper function similar to Excel's CEILING(x/3)
function ceilingDivide(value, divisor) {
  return Math.ceil(value / divisor);
}

// A helper function like MOD in spreadsheets
function mod(value, divisor) {
  return ((value - 1) % divisor) + 1; 
}

function generateAds() {
  // We'll create an array to store each ad's data
  const adsData = [];

  for (let adNum = 1; adNum <= NUM_ADS; adNum++) {
    // Determine the hook index (1-based)
    const hookIndex = ceilingDivide(adNum, 3); // from 1 to 6 if we have 6 hooks
    // Rotate through Middles (1..6)
    const middleIndex = mod(adNum, 6); 
    // Rotate through Endings (1..3)
    const endingIndex = mod(adNum, 3);

    const hookItem = HOOKS[hookIndex - 1];  // array is 0-based
    const middleItem = MIDDLES[middleIndex - 1];
    const endingItem = ENDINGS[endingIndex - 1];

    // Build the final text (or you could do more sophisticated logic if you want).
    const finalText = `
      <strong>Hook:</strong> ${hookItem.text}<br>
      <strong>Middle:</strong> ${middleItem.text}<br>
      <strong>Ending:</strong> ${endingItem.text}
    `;

    // Push a structured object
    adsData.push({
      adNumber: adNum,
      hook: hookItem,
      middle: middleItem,
      ending: endingItem,
      finalText: finalText,
    });
  }

  return adsData;
}

function displayAds(adsData) {
  const container = document.getElementById("ads-container");
  container.innerHTML = ""; // Clear previous if any

  adsData.forEach((ad) => {
    const adCard = document.createElement("div");
    adCard.classList.add("ad-card");

    // Each piece could have text + video
    // We'll create sub-sections
    // Hook Section
    const hookSection = document.createElement("div");
    hookSection.classList.add("section");
    hookSection.innerHTML = `<h4>Hook (Ad #${ad.adNumber})</h4>
                             <p>${ad.hook.text}</p>`;
    if (ad.hook.video) {
      const hookVideo = document.createElement("video");
      hookVideo.controls = true;
      hookVideo.src = ad.hook.video;
      hookSection.appendChild(hookVideo);
    }
    adCard.appendChild(hookSection);

    // Middle Section
    const middleSection = document.createElement("div");
    middleSection.classList.add("section");
    middleSection.innerHTML = `<h4>Middle</h4>
                               <p>${ad.middle.text}</p>`;
    if (ad.middle.video) {
      const middleVideo = document.createElement("video");
      middleVideo.controls = true;
      middleVideo.src = ad.middle.video;
      middleSection.appendChild(middleVideo);
    }
    adCard.appendChild(middleSection);

    // Ending Section
    const endingSection = document.createElement("div");
    endingSection.classList.add("section");
    endingSection.innerHTML = `<h4>Ending</h4>
                               <p>${ad.ending.text}</p>`;
    if (ad.ending.video) {
      const endingVideo = document.createElement("video");
      endingVideo.controls = true;
      endingVideo.src = ad.ending.video;
      endingSection.appendChild(endingVideo);
    }
    adCard.appendChild(endingSection);

    // Combine everything
    container.appendChild(adCard);
  });
}

// Initialize the app
document.addEventListener("DOMContentLoaded", () => {
  const adsData = generateAds();
  displayAds(adsData);
});
