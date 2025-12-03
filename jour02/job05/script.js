document.addEventListener("DOMContentLoaded", function() {
    const footer = document.querySelector("footer");
    const body = document.body;

    // Set minimum height for the body
    body.style.minHeight = "4096px";

    window.addEventListener("scroll", function() {
        const scrollPercentage = (window.scrollY / (body.scrollHeight - window.innerHeight)) * 100;
        const colorValue = Math.min(255, Math.floor(scrollPercentage * 2.55));
        footer.style.backgroundColor = `rgb(${colorValue}, 0, 0)`; // Change footer color based on scroll percentage
    });
});
