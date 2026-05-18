function checkPassword() {
    const input = document.getElementById("password").value.trim();
    const correctPassword = "mathwizard";

    if (input === correctPassword) {
        document.getElementById("coverPage").style.display = "none";
        document.getElementById("letterPage").classList.remove("hidden");

        const music = document.getElementById("bgMusic");
        music.play().catch(() => {});

        startBouncing();
    } else {
        document.getElementById("errorMessage").textContent =
            "Incorrect password.";
    }
}


function startBouncing() {
    const strawberries = [
        {
            el: document.getElementById("strawberry1"),
            x: 100,
            y: 100,
            dx: 2,
            dy: 1.8
        },
        {
            el: document.getElementById("strawberry2"),
            x: 500,
            y: 250,
            dx: -2.2,
            dy: 1.5
        }
    ];

    const letter = document.querySelector(".letter-box");

    strawberries.forEach(enableDrag);

    function animate() {
        const letterRect = letter.getBoundingClientRect();

        strawberries.forEach(strawberry => {
            if (strawberry.dragging) return;

            strawberry.x += strawberry.dx;
            strawberry.y += strawberry.dy;

            const size = strawberry.el.offsetWidth;

            // Bounce off browser edges
            if (
                strawberry.x <= 0 ||
                strawberry.x + size >= window.innerWidth
            ) {
                strawberry.dx *= -1;
            }

            if (
                strawberry.y <= 0 ||
                strawberry.y + size >= window.innerHeight
            ) {
                strawberry.dy *= -1;
            }

            // Bounce off letter box
            if (
                strawberry.x + size > letterRect.left &&
                strawberry.x < letterRect.right &&
                strawberry.y + size > letterRect.top &&
                strawberry.y < letterRect.bottom
            ) {
                strawberry.dx *= -1;
                strawberry.dy *= -1;
            }

            strawberry.el.style.left = strawberry.x + "px";
            strawberry.el.style.top = strawberry.y + "px";
        });

        requestAnimationFrame(animate);
    }

    animate();
}


function enableDrag(strawberry) {
    const el = strawberry.el;

    el.addEventListener("mousedown", function(e) {
        strawberry.dragging = true;

        const offsetX = e.clientX - strawberry.x;
        const offsetY = e.clientY - strawberry.y;

        function move(e) {
            strawberry.x = e.clientX - offsetX;
            strawberry.y = e.clientY - offsetY;

            el.style.left = strawberry.x + "px";
            el.style.top = strawberry.y + "px";
        }

        function stop() {
            strawberry.dragging = false;
            document.removeEventListener("mousemove", move);
            document.removeEventListener("mouseup", stop);
        }

        document.addEventListener("mousemove", move);
        document.addEventListener("mouseup", stop);
    });
}
