
// FRESH FIRST - VERIFICATION PAGE

document.addEventListener("DOMContentLoaded", function () {

    const verificationForm = document.getElementById("verificationForm");
    const verificationResult = document.getElementById("verificationResult");

    if (verificationForm) {
        verificationForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const productName = document.getElementById("productName").value.trim();
            const quantity = document.getElementById("quantity").value;
            const temperature = document.getElementById("temperature").value;

            if (!productName || quantity === "" || temperature === "") {
                alert("Please enter all required verification details.");
                return;
            }

            if (verificationResult) {
                verificationResult.style.display = "block";
                verificationResult.innerHTML = `
                    <h4>Verification Details Entered</h4>
                    <p>Product: ${escapeHTML(productName)}</p>
                    <p>Quantity: ${escapeHTML(quantity)}</p>
                    <p>Temperature: ${escapeHTML(temperature)}</p>
                    <p>Database verification will be available after backend connection.</p>
                `;
            }
        });
    }

    function escapeHTML(value) {
        const element = document.createElement("div");
        element.textContent = value;
        return element.innerHTML;
    }

});
