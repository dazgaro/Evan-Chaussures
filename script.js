
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 6000);


document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const nom = document.getElementById("nom").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const confirmation = document.getElementById("confirmation");

    if (nom && email && message) {
        confirmation.textContent = "votre message a ete envoye";
        confirmation.style.color = "green";
        this.reset();
    } else {
        confirmation.textContent = "Veuillez remplir tous les champs.";
        confirmation.style.color = "red";
    }
});