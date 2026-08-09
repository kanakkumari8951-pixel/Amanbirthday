/* =====================================================
   AMAN'S BIRTHDAY WEBSITE
   COMPLETE INTERACTION SCRIPT
   ===================================================== */

(function () {

    "use strict";

    /* -------------------------------------------------
       SCENE CONTROLLER
       ------------------------------------------------- */

    function showScene(number) {

        const scenes = document.querySelectorAll(".scene");

        scenes.forEach(function (scene) {
            scene.classList.remove("active");
        });

        const target = document.getElementById("scene" + number);

        if (target) {
            target.classList.add("active");

            window.scrollTo({
                top: 0,
                behavior: "instant"
            });
        }
    }

    /* Make it available to HTML onclick */
    window.showScene = showScene;


    /* -------------------------------------------------
       START BUTTON
       SCENE 1 → SCENE 2
       ------------------------------------------------- */

    function startSurprise() {
        showScene(2);
    }

    window.startSurprise = startSurprise;


    /* -------------------------------------------------
       LIGHTS
       SCENE 2 → SCENE 3
       ------------------------------------------------- */

    function turnOnLights() {

        const room = document.querySelector(".room");
        const button = document.getElementById("lightsButton");

        if (room) {
            room.classList.add("lit");
        }

        if (button) {
            button.innerText = "Lights Are On ✦";
            button.disabled = true;
        }

        setTimeout(function () {
            showScene(3);
        }, 1200);
    }


    /* -------------------------------------------------
       MUSIC
       SCENE 3 → SCENE 4
       ------------------------------------------------- */

    async function playBirthdayMusic() {

        const music = document.getElementById("birthdayMusic");
        const button = document.getElementById("musicButton");

        if (button) {
            button.innerText = "Playing Music ♪";
        }

        if (music) {

            try {

                music.currentTime = 0;
                music.volume = 1;

                await music.play();

            } catch (error) {

                console.log(
                    "Music could not start:",
                    error
                );

            }
        }

        /*
         * IMPORTANT:
         * Even if the audio fails, the website continues.
         */
        setTimeout(function () {
            showScene(4);
        }, 700);
    }


    /* -------------------------------------------------
       DECORATION
       SCENE 4 → SCENE 5
       ------------------------------------------------- */

    function decorate() {

        createBalloons();

        const button =
            document.getElementById("decorateButton");

        if (button) {
            button.innerText =
                "Let the magic begin ✦";

            button.disabled = true;
        }

        setTimeout(function () {
            showScene(5);
        }, 1500);
    }


    /* -------------------------------------------------
       BALLOON / DECORATION GENERATOR
       ------------------------------------------------- */

    function createBalloons() {

        const container =
            document.getElementById("balloonContainer");

        if (!container) {
            return;
        }

        container.innerHTML = "";


        /* ---------- Dynamic decoration CSS ---------- */

        if (!document.getElementById("birthdayEffects")) {

            const style =
                document.createElement("style");

            style.id = "birthdayEffects";

            style.textContent = `

                .birthday-balloon {
                    position: absolute;
                    bottom: -100px;
                    width: 42px;
                    height: 54px;
                    border-radius: 50%;
                    opacity: 0;
                    animation:
                        balloonRise 7s ease-out forwards,
                        balloonSway 3s ease-in-out infinite alternate;
                    z-index: 2;
                }

                .birthday-balloon::after {
                    content: "";
                    position: absolute;
                    width: 1px;
                    height: 80px;
                    background: rgba(255,255,255,.25);
                    left: 50%;
                    top: 100%;
                }

                .birthday-star {
                    position: absolute;
                    width: 5px;
                    height: 5px;
                    border-radius: 50%;
                    background: #f6dfaa;
                    box-shadow:
                        0 0 8px #f6dfaa,
                        0 0 16px rgba(246,223,170,.6);
                    animation: starTwinkle 2s ease-in-out infinite;
                    z-index: 1;
                }

                .birthday-petal {
                    position: absolute;
                    width: 9px;
                    height: 14px;
                    border-radius: 80% 20% 80% 20%;
                    background: #e89aa9;
                    opacity: .8;
                    animation: petalFall 7s linear forwards;
                    z-index: 3;
                }

                @keyframes balloonRise {

                    0% {
                        bottom: -120px;
                        opacity: 0;
                    }

                    15% {
                        opacity: .95;
                    }

                    100% {
                        bottom: 110%;
                        opacity: .9;
                    }
                }

                @keyframes balloonSway {

                    from {
                        transform: translateX(-12px);
                    }

                    to {
                        transform: translateX(12px);
                    }
                }

                @keyframes starTwinkle {

                    0%, 100% {
                        opacity: .2;
                        transform: scale(.7);
                    }

                    50% {
                        opacity: 1;
                        transform: scale(1.5);
                    }
                }

                @keyframes petalFall {

                    0% {
                        transform:
                            translateY(-30px)
                            rotate(0deg);
                        opacity: 0;
                    }

                    15% {
                        opacity: .8;
                    }

                    100% {
                        transform:
                            translateY(110vh)
                            rotate(360deg);
                        opacity: 0;
                    }
                }
            `;

            document.head.appendChild(style);
        }


        /* ---------- Stars ---------- */

        for (let i = 0; i < 35; i++) {

            const star =
                document.createElement("div");

            star.className =
                "birthday-star";

            star.style.left =
                Math.random() * 100 + "%";

            star.style.top =
                Math.random() * 100 + "%";

            star.style.animationDelay =
                Math.random() * 2 + "s";

            container.appendChild(star);
        }


        /* ---------- Petals ---------- */

        for (let i = 0; i < 12; i++) {

            const petal =
                document.createElement("div");

            petal.className =
                "birthday-petal";

            petal.style.left =
                Math.random() * 100 + "%";

            petal.style.animationDelay =
                Math.random() * 4 + "s";

            container.appendChild(petal);
        }


        /* ---------- Balloons ---------- */

        const colors = [
            "#d89aa8",
            "#e7c98a",
            "#9e8197",
            "#d7b99b",
            "#b88b9d",
            "#c9a86a"
        ];

        for (let i = 0; i < 10; i++) {

            const balloon =
                document.createElement("div");

            balloon.className =
                "birthday-balloon";

            balloon.style.left =
                (3 + Math.random() * 94) + "%";

            balloon.style.background =
                colors[i % colors.length];

            balloon.style.animationDelay =
                Math.random() * 2.5 + "s";

            const size =
                36 + Math.random() * 16;

            balloon.style.width =
                size + "px";

            balloon.style.height =
                size * 1.28 + "px";

            container.appendChild(balloon);
        }
    }

    window.createBalloons = createBalloons;


    /* -------------------------------------------------
       SCENE 5 → SCENE 6
       ------------------------------------------------- */

    function showMemories() {
        showScene(6);
    }


    /* -------------------------------------------------
       SCENE 6 → SCENE 7
       ------------------------------------------------- */

    function showMessage() {
        showScene(7);
    }


    /* -------------------------------------------------
       UNIVERSAL CLICK HANDLER
       
       This is deliberately ONE listener.
       It prevents one missing element from breaking
       all the other buttons.
       ------------------------------------------------- */

    document.addEventListener("click", function (event) {

        const button =
            event.target.closest("button");

        if (!button) {
            return;
        }


        /* Begin the Surprise */

        if (button.id === "startButton") {

            event.preventDefault();

            startSurprise();

            return;
        }


        /* Lights */

        if (button.id === "lightsButton") {

            event.preventDefault();

            turnOnLights();

            return;
        }


        /* Music */

        if (button.id === "musicButton") {

            event.preventDefault();

            playBirthdayMusic();

            return;
        }


        /* Decoration */

        if (button.id === "decorateButton") {

            event.preventDefault();

            decorate();

            return;
        }


        /* Birthday → Memories */

        if (button.id === "wishButton") {

            event.preventDefault();

            showMemories();

            return;
        }


        /* Memories → Message */

        if (button.id === "messageButton") {

            event.preventDefault();

            showMessage();

            return;
        }

    });


    /* -------------------------------------------------
       INITIAL STATE
       ------------------------------------------------- */

    function initialize() {

        showScene(1);

        console.log(
            "🎂 Aman Birthday Website loaded successfully."
        );
    }


    /* -------------------------------------------------
       WAIT FOR PAGE
       ------------------------------------------------- */

    if (
        document.readyState === "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            initialize
        );

    } else {

        initialize();

    }

})();
