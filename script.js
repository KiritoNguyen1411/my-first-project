// Set the target end date and time
const targetDate = new Date("2025-10-31T23:59:59").getTime();

const cards = document.querySelectorAll('.testimonial-card');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

// Function to update the countdown timer
function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft < 0) {
        // If the countdown is over, display "Deal Expired!"
        document.querySelector(".countdown").innerHTML = "<span>Deal Expired!</span>";
        return;
    }

    // Calculate time components
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Update HTML elements
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

// Run the function every second
setInterval(updateCountdown, 1000);

let currentIndex = 0;
function updateCarousel() {
    cards.forEach((card, index) => {
        card.classList.remove('active');
        if (index === currentIndex) {
            card.classList.add('active');
        }
    });
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === cards.length - 1;
}
prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});
nextButton.addEventListener('click', () => {
    if (currentIndex < cards.length - 1) {
        currentIndex++;
        updateCarousel();
    }
});
updateCarousel();

document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for subscribing!");
});