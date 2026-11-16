
// FRESH FIRST - PRIORITY PAGE

document.addEventListener("DOMContentLoaded", function () {

    const priorityFilter = document.getElementById("priorityFilter");
    const priorityTable = document.getElementById("priorityTable");

    if (priorityFilter && priorityTable) {

        priorityFilter.addEventListener("change", function () {

            const selectedPriority = priorityFilter.value;
            const rows = priorityTable.querySelectorAll("tbody tr");

            rows.forEach(function (row) {

                const priorityCell = row.querySelector(".priority-label");

                if (!priorityCell) return;

                const rowPriority = priorityCell.textContent.trim().toLowerCase();

                row.style.display =
                    selectedPriority === "all" ||
                    rowPriority === selectedPriority.toLowerCase()
                        ? ""
                        : "none";

            });

        });

    }

});
