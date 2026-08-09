// ================================
// AMAN'S BIRTHDAY WEBSITE
// Main interaction controller
// ================================


// ---------- Scene Controller ----------

function showScene(sceneNumber) {

    const scenes = document.querySelectorAll(".scene");

    scenes.forEach(scene => {
        scene.classList.remove("active");
    });

    const nextScene = document.getElementById(
        "scene" + sceneNumber
    );

    if (nextScene) {
        nextScene.classList.add("active");
    }
}


// ---------- Scene 1 → Scene 2 ----------

const startButton =
    document.getElementById("startButton");

const lightsButton =
    document.getElementById("lightsButton");

const room =
    document.querySelector(".room");


startButton.addEventListener("click", () => {

    showScene(2);

});


// ---------- Turn On Lights ----------

lightsButton.addEventListener("click", () => {

    room.classList.add("lit");

    lightsButton.innerText =
        "Lights Are On ✦";

    setTimeout(() => {

        showScene(3);

    }, 1800);

});


// ---------- Music Scene ----------

const musicButton =
    document.getElementById("musicButton");

const birthdayMusic =
    document.getElementById("birthdayMusic");

musicButton.addEventListener("click", async () => {

    try {

        birthdayMusic.currentTime = 0;
        birthdayMusic.volume = 1;

        await birthdayMusic.play();

        musicButton.innerText =
            "Music Playing ♪";

        showScene(4);
createBalloons();

    } catch (error) {

        console.log("Music error:", error);

        musicButton.innerText =
            "Tap Again ♪";

    }

});
// ---------- Decoration Scene ----------

const decorateButton =
    document.getElementById("decorateButton");


decorateButton.addEventListener("click", () => {

    createBalloons();

    decorateButton.innerText =
        "Let the magic begin ✦";

    setTimeout(() => {

        showScene(5);

    }, 1800);

});


// ---------- Balloon Generator ----------

function createBalloons() {

    const container =
        document.getElementById("balloonContainer");

    if (!container) return;

    container.innerHTML = "";

    /* ---------- Premium decoration styles ---------- */

    if (!document.getElementById("premiumDecorationStyle")) {

        const style =
            document.createElement("style");

        style.id = "premiumDecorationStyle";

        style.innerHTML = `

            .premium-light {
                position: absolute;
                width: 5px;
                height: 5px;
                border-radius: 50%;
                background: #f6dfaa;
                box-shadow:
                    0 0 8px #f6dfaa,
                    0 0 18px rgba(246,223,170,.7);
                opacity: 0;
                animation: premiumTwinkle 2.5s ease-in-out infinite;
            }

            .premium-petal {
                position: absolute;
                width: 9px;
                height: 14px;
                border-radius: 80% 20% 80% 20%;
                background: #e89aa9;
                opacity: 0;
                animation: premiumPetal 7s linear forwards;
            }

            .premium-balloon {
                position: absolute;
                bottom: -120px;
                width: 42px;
                height: 54px;
                border-radius: 50% 50% 45% 45%;
                opacity: 0;
                box-shadow:
                    inset -7px -8px 12px rgba(0,0,0,.18),
                    0 8px 25px rgba(231,201,138,.12);
                animation:
                    premiumRise 8s ease-out forwards,
                    premiumSway 3s ease-in-out infinite alternate;
            }

            .premium-balloon::after {
                content: "";
                position: absolute;
                width: 1px;
                height: 85px;
                background: rgba(255,255,255,.22);
                left: 50%;
                top: 100%;
            }

            .premium-glow {
                position: absolute;
                width: 180px;
                height: 180px;
                border-radius: 50%;
                background: rgba(231,201,138,.08);
                filter: blur(30px);
                opacity: 0;
                animation: premiumGlow 3s ease forwards;
            }

            @keyframes premiumTwinkle {
                0%,100% {
                    opacity: .15;
                    transform: scale(.7);
                }
                50% {
                    opacity: 1;
                    transform: scale(1.5);
                }
            }

            @keyframes premiumPetal {
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

            @keyframes premiumRise {
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

            @keyframes premiumSway {
                from {
                    margin-left: -12px;
                }

                to {
                    margin-left: 12px;
                }
            }

            @keyframes premiumGlow {
                from {
                    opacity: 0;
                    transform: scale(.6);
                }

                to {
                    opacity: 1;
                    transform: scale(1.4);
                }
            }

        `;

        document.head.appendChild(style);
    }


    /* ---------- Soft golden glow ---------- */

    for (let i = 0; i < 3; i++) {

        const glow =
            document.createElement("div");

        glow.className = "premium-glow";

        glow.style.left =
            (20 + Math.random() * 60) + "%";

        glow.style.top =
            (20 + Math.random() * 55) + "%";

        glow.style.animationDelay =
            (i * 0.5) + "s";

        container.appendChild(glow);
    }


    /* ---------- Fairy-light stars ---------- */

    for (let i = 0; i < 35; i++) {

        const light =
            document.createElement("div");

        light.className = "premium-light";

        light.style.left =
            Math.random() * 100 + "%";

        light.style.top =
            Math.random() * 100 + "%";

        light.style.animationDelay =
            Math.random() * 2.5 + "s";

        container.appendChild(light);
    }


    /* ---------- Floating petals ---------- */

    for (let i = 0; i < 12; i++) {

        const petal =
            document.createElement("div");

        petal.className = "premium-petal";

        petal.style.left =
            Math.random() * 100 + "%";

        petal.style.animationDelay =
            Math.random() * 5 + "s";

        petal.style.transform =
            "rotate(" +
            Math.random() * 360 +
            "deg)";

        container.appendChild(petal);
    }


    /* ---------- Elegant balloons ---------- */

    const balloonStyles = [
        "#d89aa8",
        "#e7c98a",
        "#9e8197",
        "#d7b99b",
        "#b88b9d",
        "#c9a86a"
    ];

    for (let i = 0; i < 8; i++) {

        const balloon =
            document.createElement("div");

        balloon.className =
            "premium-balloon";

        balloon.style.left =
            (5 + Math.random() * 90) + "%";

        balloon.style.background =
            balloonStyles[
                i % balloonStyles.length
            ];

        balloon.style.animationDelay =
            (Math.random() * 3) + "s";

        const size =
            36 + Math.random() * 16;

        balloon.style.width =
            size + "px";

        balloon.style.height =
            (size * 1.28) + "px";

        container.appendChild(balloon);
    }

            }
// ---------- Birthday Scene ----------

const wishButton =
    document.getElementById("wishButton");


wishButton.addEventListener("click", () => {

    showScene(6);

});


// ---------- Photo Scene ----------

const messageButton =
    document.getElementById("messageButton");


messageButton.addEventListener("click", () => {

    showScene(7);

});


// ---------- Initial Scene ----------

showScene(1);
