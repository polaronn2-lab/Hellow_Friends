function checkPassword() {
    const input = document
        .getElementById("password")
        .value
        .trim();

    const correctPassword = "friend123";

    if (input === correctPassword) {
        document.getElementById("coverPage").style.display = "none";
        document.getElementById("letterPage").classList.remove("hidden");
    } else {
        document.getElementById("errorMessage").textContent =
            "Incorrect password.";
    }
}
