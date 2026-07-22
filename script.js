const menu = document.querySelector("#menu");
const nav = document.querySelector(".links");

menu.addEventListener("click", () => {
    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {
        menu.classList.replace("fa-bars-staggered", "fa-xmark");
    } else {
        menu.classList.replace("fa-xmark", "fa-bars-staggered");
    }
});

emailjs.init("Vwrort2i6nv4BHrFW");

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_374rjek",
        "template_3gkgmnl",
        this
    )
    .then(() => {
        alert("✅ Message sent successfully!");
        contactForm.reset();
    })
    .catch((error) => {
        alert("❌ Failed to send message.");
        console.error(error);
    });
});