function renderComponentLibrary() {
    const libraryHTML = `
      <div class="mb-8">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-semibold">Video Component Library</h2>
        </div>
        <div class="grid grid-cols-3 gap-6">
          <div id="hooks" class="card p-4"></div>
          <div id="middles" class="card p-4"></div>
          <div id="endings" class="card p-4"></div>
        </div>
      </div>
    `;
    document.getElementById('componentLibrary').innerHTML = libraryHTML;
  }
  renderComponentLibrary();
  const components = {
    hooks: [
      { id: 1, text: '🔥 Discover the secret to 10x conversions', video: 'hook1.mp4', cvr: '4.2%' },
      { id: 2, text: '⚡️ Stop losing money on ineffective ads', video: 'hook2.mp4', cvr: '3.8%' },
    ],
    middles: [
      { id: 1, text: 'Our proven system has helped 1000+ businesses', video: 'middle1.mp4', cvr: '3.9%' },
    ],
    endings: [
      { id: 1, text: 'Click now to claim your free strategy call!', video: 'ending1.mp4', cvr: '4.1%' },
    ],
  };
  
  function populateComponents() {
    ['hooks', 'middles', 'endings'].forEach((type) => {
      const container = document.getElementById(type);
      container.innerHTML = `<h3 class="font-medium mb-3 text-gray-700">${type[0].toUpperCase() + type.slice(1)}</h3>`;
  
      components[type].forEach((component) => {
        const componentHTML = `
          <div class="component-card draggable card p-2 bg-gray-50 text-sm" draggable="true" onclick="showVideoPreview('${component.video}', '${component.text}')">
            ${component.text}
            <div class="text-xs text-gray-500 mt-1">CVR: ${component.cvr}</div>
            <div class="play-icon">
              <svg class="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        `;
        container.innerHTML += componentHTML;
      });
    });
  }
  
  // Initialize component library
  document.addEventListener('DOMContentLoaded', populateComponents);
  