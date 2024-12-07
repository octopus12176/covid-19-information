document.addEventListener('DOMContentLoaded', function () {
  const updateElements = document.querySelectorAll('.last-updated-date');
  updateElements.forEach((element) => {
    element.textContent = siteConfig.lastUpdated;
  });
});
