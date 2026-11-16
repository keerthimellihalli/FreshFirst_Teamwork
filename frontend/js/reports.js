
// FRESH FIRST - REPORTS PAGE

document.addEventListener("DOMContentLoaded", function () {

    const reportButton = document.getElementById("generateReport");
    const reportMessage = document.getElementById("reportMessage");

    if (reportButton) {

        reportButton.addEventListener("click", function () {

            if (reportMessage) {
                reportMessage.textContent =
                    "Report generation requires the backend database connection.";
                reportMessage.style.color = "#198754";
            } else {
                alert("Report generation requires the backend database connection.");
            }

        });

    }

});
