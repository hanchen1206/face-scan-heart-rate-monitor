document.querySelectorAll('[data-legal]').forEach((link) => {
  const url = window.FACE_SCAN_LEGAL_LINKS?.[link.dataset.legal];
  if (url) link.href = url;
});
document.getElementById('year').textContent = new Date().getFullYear();
