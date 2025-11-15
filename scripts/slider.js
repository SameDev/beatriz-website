function initSlider() {
  const slider = document.querySelector(".slider");

  if (!slider) {
    return;
  }

  const sliderContainer = slider.querySelector(".slider-container");
  const sliderItems = slider.querySelectorAll(".slider-item");
  const sliderPrev = slider.querySelector(".slider-prev");
  const sliderNext = slider.querySelector(".slider-next");
  const sliderIndicators = slider.querySelector(".slider-indicators");

  if (
    !sliderContainer ||
    sliderItems.length === 0 ||
    !sliderPrev ||
    !sliderNext ||
    !sliderIndicators
  ) {
    return;
  }

  let currentSlide = 0;

  function createIndicators() {
    sliderIndicators.innerHTML = "";
    sliderItems.forEach((_, index) => {
      const indicator = document.createElement("button");
      indicator.classList.add("slider-indicator");
      indicator.setAttribute("aria-label", `Ir para slide ${index + 1}`);
      indicator.addEventListener("click", () => {
        currentSlide = index;
        updateSlider();
      });
      sliderIndicators.appendChild(indicator);
    });
  }

  function updateSlider() {
    sliderContainer.style.transform = `translateX(-${currentSlide * 100}%)`;

    const indicators = sliderIndicators.querySelectorAll(".slider-indicator");
    indicators.forEach((indicator, index) => {
      if (index === currentSlide) {
        indicator.classList.add("active");
      } else {
        indicator.classList.remove("active");
      }
    });
  }

  sliderPrev.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + sliderItems.length) % sliderItems.length;
    updateSlider();
  });

  sliderNext.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % sliderItems.length;
    updateSlider();
  });

  createIndicators();
  updateSlider();
}
