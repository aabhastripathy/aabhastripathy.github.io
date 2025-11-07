class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="bg-white sticky top-0 z-50 shadow-sm">
        <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <!-- Centered Navbar Row -->
          <div class="flex justify-center h-16 relative">
            <ul id="nav-links" class="flex items-center gap-10 text-lg font-medium relative">

              <!-- Aabhas (GitHub Link) -->
              <li>
                <a href="https://github.com/aabhastripathy" 
                   target="_blank" 
                   class="nav-item text-2xl font-bold text-indigo-600 hover:text-indigo-700 transition">
                  Aabhas
                </a>
              </li>

              <!-- Home -->
              <li>
                <a href="index.html" class="nav-item hover:text-indigo-600 transition">
                  Home
                </a>
              </li>

              <!-- Projects -->
              <li>
                <a href="index.html#projects" class="nav-item hover:text-indigo-600 transition">
                  Projects
                </a>
              </li>

              <!-- Contact -->
              <li>
                <a href="contact.html" class="nav-item hover:text-indigo-600 transition">
                  Contact
                </a>
              </li>

              <!-- Sliding underline -->
              <span id="nav-slider" 
                class="absolute bottom-[-6px] h-[3px] bg-indigo-600 rounded transition-all duration-300">
              </span>

            </ul>
          </div>

        </nav>
      </header>
    `;

    // Feather icons
    if (window.feather) feather.replace();

    // Slider logic
    const slider = this.querySelector("#nav-slider");
    const items = this.querySelectorAll(".nav-item");

    function activateLink(el) {
      const rect = el.getBoundingClientRect();
      const navRect = el.closest("#nav-links").getBoundingClientRect();

      slider.style.width = rect.width + "px";
      slider.style.left = (rect.left - navRect.left) + "px";
    }

    // On click
    items.forEach(item => {
      item.addEventListener("click", () => activateLink(item));
    });

    // Detect active page on load
    setTimeout(() => {
      const path = window.location.pathname;

      if (path.includes("contact")) {
        activateLink(items[3]);
      } else {
        activateLink(items[1]); // Home is default
      }
    }, 150);
  }
}

customElements.define("custom-navbar", Navbar);
