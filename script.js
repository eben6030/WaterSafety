// script.js
document.addEventListener("DOMContentLoaded", function () {
    const learnMoreButton = document.querySelector(".learn-more");
    learnMoreButton.addEventListener("click", function () {
        window.location.href = "https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/water-safety.html";
    });

    const atHomeButton = document.querySelector(".at-home");
    atHomeButton.addEventListener("click", function () {
        window.location.href = "https://www.safekids.org/watersafety";
    });

    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.4)";
        });
        card.addEventListener("mouseleave", () => {
            card.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.3)";
        });
    });
});
