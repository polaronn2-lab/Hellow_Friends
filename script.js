function checkPassword() {
    const input = document
        .getElementById("password")
        .value
        .trim();

    const correctPassword = "mathwizard";

    if (input === correctPassword) {
        document.getElementById("coverPage").style.display = "none";
        document.getElementById("letterPage").classList.remove("hidden");

        document.getElementById("bgMusic").play();
    } else {
        document.getElementById("errorMessage").textContent =
            "Incorrect password.";
    }
}
