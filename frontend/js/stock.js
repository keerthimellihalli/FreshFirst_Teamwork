
// FRESH FIRST - STOCK MANAGEMENT PAGE

document.addEventListener("DOMContentLoaded", function () {

    const stockForm = document.getElementById("stockForm");

    if (stockForm) {
        stockForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const productName = document.getElementById("productName").value.trim();
            const quantity = document.getElementById("quantity").value;
            const expiryDate = document.getElementById("expiryDate").value;

            if (!productName || !quantity || !expiryDate) {
                alert("Please fill in all required fields.");
                return;
            }

            alert("Stock details entered successfully. Backend connection is required to save them in the database.");

            stockForm.reset();
        });
    }

});
