document.querySelectorAll('.draggable').forEach(draggable => {
    draggable.addEventListener('dragstart', (e) => {
      e.target.classList.add('opacity-50');
    });
  
    draggable.addEventListener('dragend', (e) => {
      e.target.classList.remove('opacity-50');
    });
  });
  
  document.querySelectorAll('.droppable').forEach(droppable => {
    droppable.addEventListener('dragover', (e) => {
      e.preventDefault();
      droppable.classList.add('active');
    });
  
    droppable.addEventListener('dragleave', (e) => {
      droppable.classList.remove('active');
    });
  
    droppable.addEventListener('drop', (e) => {
      e.preventDefault();
      droppable.classList.remove('active');
      const componentType = droppable.dataset.type;
      // Logic to handle drop goes here
    });
  });
  