document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");
    const logo = document.querySelector(".main-logo");

    if (!navbar || !logo) return;

    window.addEventListener("scroll", () => {
        const scrolled = window.scrollY > 50;
        navbar.classList.toggle("scrolled", scrolled);
        logo.classList.toggle("scrolled", scrolled);
    });
});

function openModal(imageIndex) {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    if (!modal || !modalImage) return; 

    modalImage.src = `gallery-pics/gallery-image-${imageIndex}.PNG`;
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("imageModal");
    if (modal) modal.style.display = "none";
}
document.addEventListener("DOMContentLoaded", () => {
    const elementsToObserve = document.querySelectorAll(".review-title, .review-stars, .reserve-title, .reserve-subtitle, .reserve-subsubtitle, .farm-heading, .review-box, .review-box2, .story-heading, .story-subtitle, .story-paragraph, .gal-img");
    if (elementsToObserve.length === 0) return; 
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.25 }); 

    elementsToObserve.forEach(el => observer.observe(el));
});
document.addEventListener("DOMContentLoaded", () => {
    const dialog = document.getElementById("reserve-dialog");
    const openBtn = document.getElementById("open_dialog");
    const closeBtn = document.getElementById("close-dialog");

    if (!dialog || !openBtn || !closeBtn) return;
    openBtn.addEventListener("click", () => dialog.showModal());
    closeBtn.addEventListener("click", () => dialog.close());
});
