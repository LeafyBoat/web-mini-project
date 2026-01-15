const navLinks = document.querySelectorAll(".nav-links a");
const progress = document.getElementById("progress");
const toTopButton = document.querySelector(".to-top");
const revealItems = document.querySelectorAll(".reveal");
const yearLabel = document.querySelector("[data-year]");

const currentPage = window.location.pathname.split("/").pop() || "index.html";
navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPage) {
        link.classList.add("active");
    }
});

const updateProgress = () => {
    if (!progress) {
        return;
    }
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    const total = scrollHeight - clientHeight;
    const percent = total > 0 ? (scrollTop / total) * 100 : 0;
    progress.style.width = `${percent}%`;
};

const toggleToTop = () => {
    if (!toTopButton) {
        return;
    }
    toTopButton.classList.toggle("show", window.scrollY > 420);
};

const onScroll = () => {
    updateProgress();
    toggleToTop();
};

window.addEventListener("scroll", onScroll);
window.addEventListener("load", onScroll);

if (toTopButton) {
    toTopButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

if (yearLabel) {
    yearLabel.textContent = new Date().getFullYear();
}

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15 }
    );

    revealItems.forEach((item) => observer.observe(item));
} else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
}
