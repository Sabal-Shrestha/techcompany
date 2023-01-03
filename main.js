// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem("darkMode");

const darkModeToggle = document.querySelector("#dark-mode-toggle");

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add("darkmode");
  // 2. Update darkMode in localStorage
  localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove("darkmode");
  // 2. Update darkMode in localStorage
  localStorage.setItem("darkMode", null);
};

// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === "enabled") {
  enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener("click", () => {
  // get their darkMode setting
  darkMode = localStorage.getItem("darkMode");

  // if it not current enabled, enable it
  if (darkMode !== "enabled") {
    enableDarkMode();
    // if it has been enabled, turn it off
  } else {
    disableDarkMode();
  }
}); // external js: isotope.pkgd.js

// init Isotope
var iso = new Isotope(".portfolio-grid", {
  itemSelector: ".portfolio-items",
  // layoutMode: "fitRows",
});

// filter functions
// var filterFns = {};

// bind filter button click
var filtersElem = document.querySelector(".filters-button-group");
filtersElem.addEventListener("click", function (event) {
  // only work with buttons
  if (!matchesSelector(event.target, "button")) {
    return;
  }
  var filterValue = event.target.getAttribute("data-filter");
  // use matching filter function
  iso.arrange({ filter: filterValue });
});

// change is-checked class on buttons
var buttonGroups = document.querySelectorAll(".button-group");
for (var i = 0, len = buttonGroups.length; i < len; i++) {
  var buttonGroup = buttonGroups[i];
  radioButtonGroup(buttonGroup);
}

function radioButtonGroup(buttonGroup) {
  buttonGroup.addEventListener("click", function (event) {
    // only work with buttons
    if (!matchesSelector(event.target, "button")) {
      return;
    }
    buttonGroup.querySelector(".is-checked").classList.remove("is-checked");
    event.target.classList.add("is-checked");
  });
}
