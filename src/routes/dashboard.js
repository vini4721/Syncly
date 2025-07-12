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
    if (
      !showOptions.classList.contains("hidden") &&
      !showOptions.contains(event.target)
    ) {
      showOptions.classList.toggle("hidden");
    }
  });

  document.querySelector(".logout").addEventListener("click", () => {
    window.location.href = "index.html";
  });

  const filterTabs = document.querySelectorAll(".filter-tab");

  filterTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // Reset
      filterTabs.forEach((ele) => {
        ele.classList.remove("bg-purple-600", "text-white");
        ele.classList.add("text-gray-400");
      });

      //Assign bg-color on active class
      tab.classList.remove("text-gray-400");
      tab.classList.add("bg-purple-600", "text-white");
    });
  });
});
