// Generate and populate spreadsheet
function populateSpreadsheet(adsData) {
  const tableBody = document.querySelector("#ads-table tbody");
  tableBody.innerHTML = "";

  adsData.forEach((ad) => {
    const row = document.createElement("tr");

    // Ad Number
    const adNumberCell = document.createElement("td");
    adNumberCell.textContent = ad.adNumber;

    // Hook Cell
    const hookCell = createCell(ad.hook);

    // Middle Cell
    const middleCell = createCell(ad.middle);

    // Ending Cell
    const endingCell = createCell(ad.ending);

    // Actions Cell
    const actionCell = document.createElement("td");
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => {
      alert(`Editing Ad #${ad.adNumber}`);
      // Add further editing functionality here
    });
    actionCell.appendChild(editButton);

    // Append all cells to the row
    row.appendChild(adNumberCell);
    row.appendChild(hookCell);
    row.appendChild(middleCell);
    row.appendChild(endingCell);
    row.appendChild(actionCell);

    tableBody.appendChild(row);
  });
}

function createCell(section) {
  const cell = document.createElement("td");

  const text = document.createElement("p");
  text.textContent = section.text;

  if (section.video) {
    const videoLink = document.createElement("span");
    videoLink.textContent = " [Watch Video]";
    videoLink.className = "link";
    videoLink.addEventListener("click", () => {
      const video = document.createElement("video");
      video.controls = true;
      video.src = section.video;
      cell.appendChild(video);
      videoLink.remove(); // Remove the link once video is shown
    });
    cell.appendChild(videoLink);
  }

  cell.appendChild(text);
  return cell;
}

// Initialize with data
document.addEventListener("DOMContentLoaded", () => {
  const adsData = generateAds();
  populateSpreadsheet(adsData);
});
