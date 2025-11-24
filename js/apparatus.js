// Toggle individual <app> bubbles
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("tei-app").forEach(app => {
    app.addEventListener("click", function(event) {
      event.stopPropagation();
      this.classList.toggle("open");
    });
  });
});
