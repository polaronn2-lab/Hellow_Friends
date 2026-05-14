function checkPassword() {
    const input = document.getElementById("password").value.trim();
    const correctPassword = "mathwizard";

    if (input === correctPassword) {
        // Hide cover
        document.getElementById("coverPage").style.display = "none";

        // Show letter
        document.getElementById("letterPage").classList.remove("hidden");

        // Play music safely
        const music = document.getElementById("bgMusic");
        if (music) {
            music.play().catch(err => {
                console.log("Autoplay blocked:", err);
            });
        }

    } else {
        document.getElementById("errorMessage").textContent =
            "Incorrect password.";
    }
}
