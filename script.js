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

        setTimeout(() => {

            showScene(4);

            
        }, 1200);

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
        document.getElementById(
            "balloonContainer"
        );

    if (!container) return;


    // Prevent too many balloons

    container.innerHTML = "";


    for (let i = 0; i < 18; i++) {

        const balloon =
            document.createElement("div");

        balloon.classList.add("balloon");


        // Random horizontal position

        balloon.style.left =
            Math.random() * 100 + "%";


        // Random delay

        balloon.style.animationDelay =
            Math.random() * 3 + "s";


        // Slight size variation

        const size =
            40 + Math.random() * 25;

        balloon.style.width =
            size + "px";

        balloon.style.height =
            size * 1.25 + "px";


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
