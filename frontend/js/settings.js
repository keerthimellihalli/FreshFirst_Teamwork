
// FRESH FIRST - SETTINGS PAGE

document.addEventListener("DOMContentLoaded", function () {

    const settingsForm = document.getElementById("settingsForm");

    if (settingsForm) {

        settingsForm.addEventListener("submit", function (event) {
            event.preventDefault();

            alert(
                "Settings details entered successfully.\n" +
                "Backend connection is required to save these settings in the database."
            );

        });

    }

});
