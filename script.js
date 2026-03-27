function toggleTheme() {
    let body = document.body;
    let button = document.querySelector(".theme-btn");

    if (body.classList.contains("dark")) {
        body.classList.remove("dark");
        button.textContent = "🌙";
    } else {
        body.classList.add("dark");
        button.textContent = "☀️";
    }
}
