function renderAdBuilder() {
    const builderHTML = `
      <div class="mb-8">
        <h2 class="text-xl font-semibold mb-4">Video Ad Builder</h2>
        <div class="card p-6">
          <div class="grid grid-cols-3 gap-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Hook Video</label>
              <div class="droppable p-4" data-type="hook">
                <div class="text-sm text-gray-400 text-center">Drag a hook here</div>
              </div>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Middle Video</label>
              <div class="droppable p-4" data-type="middle">
                <div class="text-sm text-gray-400 text-center">Drag a middle here</div>
              </div>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Ending Video</label>
              <div class="droppable p-4" data-type="ending">
                <div class="text-sm text-gray-400 text-center">Drag an ending here</div>
              </div>
            </div>
          </div>
          <div class="mt-6 flex justify-end">
            <button class="btn btn-primary">Combine Videos</button>
          </div>
        </div>
      </div>
    `;
    document.getElementById('adBuilder').innerHTML = builderHTML;
  }
  renderAdBuilder();
  function handleDrop(event, type) {
    const draggedComponent = event.dataTransfer.getData('text/plain');
    const droppedContainer = document.querySelector(`.droppable[data-type="${type}"]`);
    
    // Clear any existing content in the drop area
    droppedContainer.innerHTML = `
      <div class="text-sm text-gray-700">${draggedComponent}</div>
    `;
  }
  
  function initializeDragDrop() {
    document.querySelectorAll('.draggable').forEach((draggable) => {
      draggable.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', draggable.innerHTML.trim());
      });
    });
  
    document.querySelectorAll('.droppable').forEach((droppable) => {
      const type = droppable.getAttribute('data-type');
  
      droppable.addEventListener('dragover', (e) => {
        e.preventDefault();
        droppable.classList.add('active');
      });
  
      droppable.addEventListener('dragleave', () => {
        droppable.classList.remove('active');
      });
  
      droppable.addEventListener('drop', (e) => {
        e.preventDefault();
        droppable.classList.remove('active');
        handleDrop(e, type);
      });
    });
  }
  
  // Initialize ad builder drag-and-drop
  document.addEventListener('DOMContentLoaded', initializeDragDrop);

  