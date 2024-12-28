class AdCombinator {
    constructor() {
        this.loadComponents();
        this.initializeEventListeners();
    }

    async loadComponents() {
        const components = ['header', 'componentLibrary', 'adBuilder', 'modals'];
        
        for (const component of components) {
            const response = await fetch(`components/${component}.html`);
            const html = await response.text();
            document.getElementById(component).innerHTML = html;
        }
    }

    initializeEventListeners() {
        document.addEventListener('DOMContentLoaded', () => {
            // Initialize all component classes
            this.dragAndDrop = new DragAndDrop();
            this.videoPreview = new VideoPreview();
            this.adNotes = new AdNotes();
        });
    }
}

const app = new AdCombinator();
