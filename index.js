const formOpenBtn = document.querySelector("#form-open"),
home = document.querySelector(".home"),
formContainer = document.querySelector(".form-container"),
formCloseBtn = document.querySelector(".form-close"),
signUpBtn = document.querySelector("#signup"),
loginBtn = document.querySelector("#login");

// shows the login button and exits it when X is pressed
formOpenBtn.addEventListener("click", () => home.classList.add("show")),
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

// switches between login and register forms through the Login and Signup belo
signUpBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.add("active");
});
loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.remove("active");
});