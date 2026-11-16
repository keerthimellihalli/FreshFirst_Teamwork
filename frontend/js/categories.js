
// FRESH FIRST - CATEGORY MANAGEMENT PAGE

document.addEventListener("DOMContentLoaded", function () {

    const categoryForm = document.getElementById("categoryForm");

    if (categoryForm) {

        categoryForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const categoryName = document.getElementById("categoryName").value.trim();
            const storageTemperature = document.getElementById("storageTemperature").value;

            if (!categoryName || storageTemperature === "") {
                alert("Please enter the category name and storage temperature.");
                return;
            }

            alert(
                "Category details entered successfully.\n" +
                "Backend connection is required to save the category in the database."
            );

            categoryForm.reset();
        });

    }

});
