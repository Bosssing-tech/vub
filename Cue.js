// Slideshow functionality
let slideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll(".mySlides");
    let dots = document.querySelectorAll(".dot");

    // Hide all slides initially
    slides.forEach(slide => {
        slide.style.display = "none";
    });

    // Remove the active class from all dots
    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    // Increment slide index
    slideIndex++;

    // Reset to the first slide if we go beyond the last slide
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Display the current slide and highlight the corresponding dot
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
}

// Start the slideshow when the page loads
document.addEventListener("DOMContentLoaded", () => {
    showSlides(); // Show the first slide
    setInterval(showSlides, 3000); // Automatically switch slides every 3 seconds
});

// Dot navigation functionality
function currentSlide(n) {
    let slides = document.querySelectorAll(".mySlides");
    let dots = document.querySelectorAll(".dot");
    slideIndex = n;

    // Hide all slides
    slides.forEach(slide => {
        slide.style.display = "none";
    });

    // Remove active class from all dots
    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    // Show the selected slide and activate the dot
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
}

// Hamburger menu toggle functionality
const hamburgerMenu = document.querySelector('.hamburger-menu');
const sideMenu = document.querySelector('.side-menu');

hamburgerMenu.addEventListener('click', () => {
    // Toggle the 'show' class to show or hide the side menu
    sideMenu.classList.toggle('show');
});
