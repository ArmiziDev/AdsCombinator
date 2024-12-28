class VideoPreview {
    constructor() {
        this.modal = document.getElementById('videoPreviewModal');
        this.player = document.getElementById('videoPlayer');
        this.titleEl = document.getElementById('videoTitle');
    }

    show(videoUrl, title) {
        this.titleEl.textContent = title;
        this.player.src = videoUrl;
        this.modal.classList.add('active');
        this.player.play();
    }

    close() {
        this.player.pause();
        this.player.src = '';
        this.modal.classList.remove('active');
    }
}

const videoPreview = new VideoPreview();
