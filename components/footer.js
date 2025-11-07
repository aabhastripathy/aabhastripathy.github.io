class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="bg-gray-900 text-gray-300 py-8 mt-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div class="flex justify-center gap-6 mb-4">
            <a href="https://github.com/aabhastripathy" target="_blank" rel="noopener" class="hover:text-white" aria-label="GitHub">
              <i data-feather="github"></i>
            </a>
            <a href="https://www.linkedin.com/in/aabhastiphati02/" target="_blank" rel="noopener" class="hover:text-white" aria-label="LinkedIn">
              <i data-feather="linkedin"></i>
            </a>
            <a href="mailto:aabhastripathi2002@gmail.com" class="hover:text-white" aria-label="Email">
              <i data-feather="mail"></i>
            </a>
          </div>
          <p class="text-sm">© <span id="year"></span> Aabhas Tripathi — All Rights Reserved</p>
        </div>
      </footer>
    `;

    // Icons + year
    if (window.feather) feather.replace();
    const y = this.querySelector('#year');
    if (y) y.textContent = new Date().getFullYear();
  }
}

customElements.define('custom-footer', Footer);
