class DragAndDrop {
    constructor() {
        this.initializeDraggables();
        this.initializeDroppables();
    }

    initializeDraggables() {
        document.querySelectorAll('.draggable').forEach(draggable => {
            draggable.addEventListener('dragstart', this.handleDragStart.bind(this));
            draggable.addEventListener('dragend', this.handleDragEnd.bind(this));
        });
    }

    initializeDroppables() {
        document.querySelectorAll('.droppable').forEach(droppable => {
            droppable.addEventListener('dragover', this.handleDragOver.bind(this));
            droppable.addEventListener('dragleave', this.handleDragLeave.bind(this));
            droppable.addEventListener('drop', this.handleDrop.bind(this));
        });
    }

    handleDragStart(e) {
        e.target.classList.add('opacity-50');
        e.dataTransfer.setData('text/plain', e.target.innerHTML);
        e.dataTransfer.setData('componentType', e.target.dataset.type);
    }

    handleDragEnd(e) {
        e.target.classList.remove('opacity-50');
    }

    handleDragOver(e) {
        e.preventDefault();
        e.target.classList.add('active');
    }

    handleDragLeave(e) {
        e.target.classList.remove('active');
    }

    handleDrop(e) {
        e.preventDefault();
        const droppable = e.target;
        droppable.classList.remove('active');
        
        const componentType = e.dataTransfer.getData('componentType');
        const content = e.dataTransfer.getData('text/plain');
        
        if (droppable.dataset.type === componentType) {
            droppable.innerHTML = content;
            droppable.classList.add('filled');
        }
    }
}

const dragAndDrop = new DragAndDrop();
