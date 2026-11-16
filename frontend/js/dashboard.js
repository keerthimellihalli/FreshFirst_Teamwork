
// FRESH FIRST - DASHBOARD PAGE

document.addEventListener("DOMContentLoaded", function () {

    const currentDate = document.getElementById("currentDate");

    if (currentDate) {
        currentDate.textContent = new Date().toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "long",
            year: "numeric"
        });
    }

    const menuLinks = document.querySelectorAll(".dashboard-menu a");

    menuLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            console.log("Opening:", link.textContent.trim());
        });
    });

});
