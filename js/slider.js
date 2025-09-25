document.addEventListener("DOMContentLoaded", () => {
  const sliderImages = document.querySelector(".slider-images");
  const images = document.querySelectorAll(".slider-images .slider-image");
  const dotsContainer = document.querySelector(".slider-dots");
  const dots = document.querySelectorAll(".slider-dots .dot");

  let currentIndex = 0;
  const totalImages = images.length;

  function showImage(index) {
    images.forEach((img, i) => {
      img.classList.remove("active");
      if (i === index) {
        img.classList.add("active");
      }
    });
    dots.forEach((dot, i) => {
      dot.classList.remove("active");
      if (i === index) {
        dot.classList.add("active");
      }
    });
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
  }

  dots.forEach((dot) => {
    dot.addEventListener("click", (e) => {
      const slideIndex = parseInt(e.target.dataset.slide);
      currentIndex = slideIndex;
      showImage(currentIndex);
    });
  });

  // Automatic sliding
  setInterval(nextImage, 5000); // Change image every 5 seconds

  showImage(currentIndex); // Initialize the first image
});
