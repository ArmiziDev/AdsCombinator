// ------------- DRAG AND DROP ------------- //

// We’ll store the data of the currently-dragged item
let draggedItemData = null;

// Add event listeners to all draggable section items
document.querySelectorAll('.section-item').forEach((item) => {
  item.addEventListener('dragstart', (e) => {
    // Store the item’s data attributes in an object
    draggedItemData = {
      title: item.getAttribute('data-title'),
      description: item.getAttribute('data-description'),
      video: item.getAttribute('data-video'),
    };
  });
});

// Add drag event listeners to each of the 18 ad slots
document.querySelectorAll('.ad-slot').forEach((slot) => {
  slot.addEventListener('dragover', (e) => {
    e.preventDefault();
    slot.classList.add('drag-over');
  });

  slot.addEventListener('dragleave', () => {
    slot.classList.remove('drag-over');
  });

  slot.addEventListener('drop', () => {
    slot.classList.remove('drag-over');

    if (draggedItemData) {
      // Fill the slot with the data from draggedItemData
      // Optionally, you can create a child element to show the title
      slot.innerHTML = `<div class="section-item"
                             data-title="${draggedItemData.title}"
                             data-description="${draggedItemData.description}"
                             data-video="${draggedItemData.video}">
                          ${draggedItemData.title}
                        </div>`;
      // Clear the saved data
      draggedItemData = null;

      // Re-add the click event to open the modal for the newly created item
      slot.querySelector('.section-item').addEventListener('click', openModal);
    }
  });
});

// ------------- MODAL FUNCTIONALITY ------------- //

// Grab references to modal elements
const modalOverlay = document.getElementById('modal-overlay');
const modalTitle   = document.getElementById('modal-title');
const modalDesc    = document.getElementById('modal-description');
const modalVideo   = document.getElementById('modal-video');
const modalClose   = document.getElementById('modal-close');

// Close modal when clicking close button
modalClose.addEventListener('click', () => {
  modalOverlay.classList.add('hidden');
  // Also remove video src to stop playback
  modalVideo.src = '';
});

// Close modal if click outside content
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.classList.add('hidden');
    modalVideo.src = '';
  }
});

// ------------- CLICK TO OPEN MODAL ------------- //
function openModal(e) {
  const item = e.currentTarget;
  const title = item.getAttribute('data-title');
  const description = item.getAttribute('data-description');
  const video = item.getAttribute('data-video');

  modalTitle.textContent = title;
  modalDesc.textContent = description;
  modalVideo.src = video; // YouTube embed link

  modalOverlay.classList.remove('hidden');
}

// Attach click listeners for sidebar items
document.querySelectorAll('.section-item').forEach((item) => {
  item.addEventListener('click', openModal);
});
