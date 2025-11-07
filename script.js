// Basic enhancement hooks
document.addEventListener('DOMContentLoaded', () => {
  // Feather icons safety replace (if not already called inside components)
  if (window.feather) feather.replace();

  // Contact form fake handler (front-end only)
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (form && status) {
    form.addEventListener('submit', () => {
      status.classList.remove('hidden');
      form.reset();
    });
  }
});
