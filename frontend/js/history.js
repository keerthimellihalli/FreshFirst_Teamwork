
// FRESH FIRST - HISTORY PAGE

document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.getElementById("historySearch");
    const historyTable = document.getElementById("historyTable");

    if (searchInput && historyTable) {

        searchInput.addEventListener("input", function () {

            const searchText = searchInput.value.toLowerCase();
            const rows = historyTable.querySelectorAll("tbody tr");

            rows.forEach(function (row) {

                const rowText = row.textContent.toLowerCase();

                row.style.display = rowText.includes(searchText) ? "" : "none";

            });

        });

    }

});
