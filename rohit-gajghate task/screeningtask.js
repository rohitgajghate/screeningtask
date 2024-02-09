let toggles = document.querySelectorAll(".accordion-toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const content = toggle.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      document
        .querySelectorAll(".accordion-content")
        .forEach((element) => (element.style.maxHeight = null));
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});
