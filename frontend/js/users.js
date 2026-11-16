
// FRESH FIRST - USER MANAGEMENT PAGE

document.addEventListener("DOMContentLoaded", function () {

    const userForm = document.getElementById("userForm");

    if (userForm) {

        userForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const fullName = document.getElementById("fullName").value.trim();
            const username = document.getElementById("username").value.trim();
            const role = document.getElementById("role").value;

            if (!fullName || !username || !role) {
                alert("Please fill in all required user details.");
                return;
            }

            alert(
                "User details entered successfully.\n" +
                "Backend connection is required to save the user in the database."
            );

            userForm.reset();
        });

    }

});
