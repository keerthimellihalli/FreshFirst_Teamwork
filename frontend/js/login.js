
document.addEventListener("DOMContentLoaded", function () {

    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();
        const message = document.getElementById("loginMessage");

        if (username === "admin" && password === "admin123") {

            message.textContent = "Login successful!";
            message.style.color = "green";

            setTimeout(function () {
                window.location.href = "dashboard.html";
            }, 1000);

        } else {

            message.textContent = "Invalid username or password.";
            message.style.color = "red";

        }

    });

});
