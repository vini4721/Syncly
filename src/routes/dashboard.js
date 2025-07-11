document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".upload-icon").addEventListener("click", () => {
    window.location.href = "editor.html";
  });

  let showOptions = document.querySelector(".controls");
  let profileButton = document.querySelector(".profile");

  profileButton.addEventListener("click", function (event) {
    event.stopPropagation();
    showOptions.classList.toggle("hidden");
  });

  document.addEventListener("click", function (event) {
    if (!showOptions.classList.contains("hidden") && !(showOptions.contains(event.target))) {
      showOptions.classList.toggle("hidden");
    }
  });

  document.querySelector(".logout").addEventListener("click", () => {
    window.location.href = "index.html";
  });
});
