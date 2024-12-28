function showVideoPreview(videoUrl, title) {
    const modal = document.getElementById('videoPreviewModal');
    const player = document.getElementById('videoPlayer');
    const titleEl = document.getElementById('videoTitle');
  
    player.src = videoUrl;
    titleEl.textContent = title;
  
    modal.classList.add('active');
    player.play();
  }
  
  function closeVideoPreview() {
    const modal = document.getElementById('videoPreviewModal');
    const player = document.getElementById('videoPlayer');
  
    player.pause();
    player.src = '';
    modal.classList.remove('active');
  }
  