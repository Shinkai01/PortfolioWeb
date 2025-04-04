const mainTabs = document.querySelector(".main-tabs");
const mainSliderCircle = document.querySelector(".main-slider-circle");
const roundButtons = document.querySelectorAll(".round-button");

const colors = {
  blue: {
    50: {
      value: "#66bdd3",
    },
    100: {
      value: "#222831",
    },
  },
  green: {
    50: {
      value: "#66bdd3",
    },
    100: {
      value: "#222831",
    },
  },
  purple: {
    50: {
      value: "#66bdd3",
    },
    100: {
      value: "#222831",
    },
  },
  orange: {
    50: {
      value: "#66bdd3",
    },
    100: {
      value: "#222831",
    },
  },
  red: {
    50: {
      value: "#66bdd3",
    },
    100: {
      value: "#222831",
    },
  },
};

const getColor = (color, variant) => {
  return colors[color][variant].value;
};

const handleActiveTab = (tabs, event, className) => {
  tabs.forEach((tab) => {
    tab.classList.remove(className);
  });

  if (!event.target.classList.contains(className)) {
    event.target.classList.add(className);
  }
};

mainTabs.addEventListener("click", (event) => {
  const root = document.documentElement;
  const targetColor = event.target.dataset.color;
  const targetTranslateValue = event.target.dataset.translateValue;

  if (event.target.classList.contains("round-button")) {
    if (mainSliderCircle.classList.contains("animate-jello")) {
      mainSliderCircle.classList.remove("animate-jello");
      void mainSliderCircle.offsetWidth;
      mainSliderCircle.classList.add("animate-jello");
    }
    root.style.setProperty("--translate-main-slider", targetTranslateValue);
    root.style.setProperty("--main-slider-color", getColor(targetColor, 50));
    root.style.setProperty("--background-color", getColor(targetColor, 100));
    handleActiveTab(roundButtons, event, "active");
    if (!event.target.classList.contains("gallery")) {
      root.style.setProperty("--filters-container-height", "0");
      root.style.setProperty("--filters-wrapper-opacity", "0");
    } else {
      root.style.setProperty("--filters-container-height", "3.8rem");
      root.style.setProperty("--filters-wrapper-opacity", "1");
    }
  }
});

const filterTabs = document.querySelector(".filter-tabs");
const filterButtons = document.querySelectorAll(".filter-button");

filterTabs.addEventListener("click", (event) => {
  const root = document.documentElement;
  const targetTranslateValue = event.target.dataset.translateValue;

  if (event.target.classList.contains("filter-button")) {
    root.style.setProperty("--translate-filters-slider", targetTranslateValue);
    handleActiveTab(filterButtons, event, "filter-active");
  }
});