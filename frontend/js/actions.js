
// FRESH FIRST - SUGGESTED ACTIONS PAGE

document.addEventListener("DOMContentLoaded", function () {

    const actionForm = document.getElementById("actionForm");

    if (actionForm) {

        actionForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const productName = document.getElementById("productName").value.trim();
            const suggestedAction = document.getElementById("suggestedAction").value;
            const remarks = document.getElementById("remarks").value.trim();

            if (!productName || !suggestedAction) {
                alert("Please enter the product name and select an action.");
                return;
            }

            alert(
                "Action details entered successfully.\n\n" +
                "Product: " + productName +
                "\nSuggested Action: " + suggestedAction +
                "\nRemarks: " + remarks +
                "\n\nBackend connection is required to save this record."
            );

            actionForm.reset();
        });

    }

});
