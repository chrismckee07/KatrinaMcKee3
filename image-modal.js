// image-modal.js
// Handles image modal overlay for book cover images

document.addEventListener('DOMContentLoaded', function () {
  // Select all book cover thumbnails
  const thumbnails = document.querySelectorAll('img.thumbnail');
  thumbnails.forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', function () {
      showImageModal(img.src, img.alt);
    });
  });

  function showImageModal(src, alt) {
    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'image-modal-overlay';

    // Create image
    const modalImg = document.createElement('img');
    modalImg.src = src;
    modalImg.alt = alt;
    modalImg.tabIndex = 0;

    // Close on click or Escape
    overlay.addEventListener('click', function () {
      document.body.classList.remove('modal-open');
      document.body.removeChild(overlay);
    });
    document.addEventListener('keydown', function escListener(e) {
      if (e.key === 'Escape') {
        if (document.body.contains(overlay)) {
          document.body.classList.remove('modal-open');
          document.body.removeChild(overlay);
        }
        document.removeEventListener('keydown', escListener);
      }
    });

    overlay.appendChild(modalImg);
    document.body.appendChild(overlay);
    document.body.classList.add('modal-open');
    modalImg.focus();
  }
});
