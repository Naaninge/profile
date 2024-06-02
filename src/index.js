const tabButtons = document.querySelectorAll(".tabs .btn");
const toggleOff = document.querySelector(".dark-theme");
const toggleOn = document.querySelector(".light-theme");

tabButtons.forEach((tabButton) => {
  tabButton.addEventListener("click", () => {
    const activeButton = document.querySelector(".tabs .border-bottom");
    const currentTabClassName = activeButton.dataset.tab;
    // console.log(currentTabClassName);

    activeButton.classList.remove("border-bottom");
    tabButton.classList.add("border-bottom");

    const selectedTabClassName = tabButton.dataset.tab;
    if (selectedTabClassName) {
      const selectedTab = document.querySelector(
        `article .${selectedTabClassName}`
      );
      if (selectedTab) {
        selectedTab.classList.add("show");
      }

      if (currentTabClassName) {
        const currentTab = document.querySelector(
          `article .${currentTabClassName}`
        );
        if (currentTab) {
          currentTab.classList.remove("show");
        }
      }
    }
  });
});
// remove dark theme
toggleOff.addEventListener("click", () => {
  if (toggleOff.classList.contains("hide")) {
    toggleOff.classList.remove("hide");
    toggle.On.classList.add("hide");
    document.documentElement.classList.remove("light-theme");
  } else {
    document.documentElement.classList.add("light-theme");
    toggleOff.classList.add("hide");
    toggleOn.classList.remove("hide");
  }
});

// show light theme
toggleOn.addEventListener("click", () => {
  if (toggleOn.classList.contains("hide")) {
    document.documentElement.classList.add("light-theme");
    toggleOn.classList.remove("hide");
    toggleOff.classList.add("hide");
  } else {
    document.documentElement.classList.remove("light-theme");
    toggleOn.classList.add("hide");
    toggleOff.classList.remove("hide");
  }
});
