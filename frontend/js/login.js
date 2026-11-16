
// FRESH FIRST - LOGIN PAGE

document.addEventListener("DOMContentLoaded", function () {

    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value.trim();
            const message = document.getElementById("loginMessage");

            if (username === "" || password === "") {
                message.textContent = "Please enter username and password.";
                message.style.color = "red";
                return;
            }

            message.textContent = "Login page is ready. Backend connection is required to verify your account.";
            message.style.color = "#198754";
        });
    }

});
