/* =========================================
   BIRTHDAY CINEMATIC CONTROLLER
========================================= */

let currentScene = 0;

const scenes = document.querySelectorAll(".scene");
const dots = document.querySelectorAll(".dot");


/* =========================================
   SHOW SCENE
========================================= */

function showScene(index) {

    scenes.forEach((scene, i) => {

        scene.classList.toggle(
            "active",
            i === index
        );

    });

    dots.forEach((dot, i) => {

        dot.classList.toggle(
            "active",
            i === index
        );

    });

}


/* =========================================
   NEXT SCENE
========================================= */

function nextScene() {

    if (currentScene < scenes.length - 1) {

        currentScene++;

        showScene(currentScene);

        /*
         * Final reveal gets special
         * cinematic treatment.
         */

        if (currentScene === 4) {

            setTimeout(() => {
                createConfetti(55);
            }, 900);

        }

    }

}


/* =========================================
   FINAL CELEBRATION
========================================= */

function celebrate() {

    createConfetti(120);

    createGoalEffect();

}


/* =========================================
   CONFETTI
========================================= */

function createConfetti(amount) {

    const container =
        document.getElementById(
            "confetti-container"
        );

    for (let i = 0; i < amount; i++) {

        const piece =
            document.createElement("div");

        piece.className =
            "confetti";

        /*
         * Random position
         */

        piece.style.left =
            Math.random() * 100 + "vw";

        /*
         * Random animation speed
         */

        piece.style.animationDuration =
            (2 + Math.random() * 3) + "s";

        piece.style.animationDelay =
            Math.random() * 0.8 + "s";

        /*
         * Random size
         */

        const size =
            5 + Math.random() * 5;

        piece.style.width =
            size + "px";

        piece.style.height =
            (size * 1.6) + "px";

        /*
         * Random rotation
         */

        piece.style.transform =
            `rotate(${Math.random() * 360}deg)`;

        /*
         * Birthday particle colors
         */

        const colors = [
            "#7de5d6",
            "#ffffff",
            "#f7d774",
            "#7db9ff",
            "#ff8fa3"
        ];

        piece.style.background =
            colors[
                Math.floor(
                    Math.random() * colors.length
                )
            ];

        container.appendChild(piece);

        /*
         * Remove after animation
         */

        setTimeout(() => {

            piece.remove();

        }, 6000);

    }

}


/* =========================================
   GOAL EFFECT
========================================= */

function createGoalEffect() {

    const goal =
        document.createElement("div");

    goal.innerHTML =
        "⚽ GOAL!!! 🎉";

    goal.style.position =
        "fixed";

    goal.style.left =
        "50%";

    goal.style.top =
        "50%";

    goal.style.transform =
        "translate(-50%, -50%) scale(0)";

    goal.style.zIndex =
        "300";

    goal.style.fontSize =
        "clamp(40px, 12vw, 100px)";

    goal.style.fontWeight =
        "900";

    goal.style.color =
        "#ffffff";

    goal.style.textShadow =
        "0 0 30px rgba(125,229,214,0.8)";

    goal.style.transition =
        "transform .7s ease, opacity .7s ease";

    document.body.appendChild(goal);


    /*
     * Animate in
     */

    requestAnimationFrame(() => {

        goal.style.transform =
            "translate(-50%, -50%) scale(1)";

    });


    /*
     * Animate out
     */

    setTimeout(() => {

        goal.style.transform =
            "translate(-50%, -50%) scale(1.3)";

        goal.style.opacity =
            "0";

    }, 1200);


    setTimeout(() => {

        goal.remove();

    }, 2000);

}


/* =========================================
   KEYBOARD SUPPORT
========================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "ArrowRight" ||
            event.key === "Enter" ||
            event.key === " "
        ) {

            /*
             * Prevent page scrolling
             */

            event.preventDefault();

            if (currentScene < scenes.length - 1) {

                nextScene();

            } else {

                celebrate();

            }

        }

    }
);


/* =========================================
   PRELOAD IMAGES
========================================= */

const imageFiles = [
    "haaland1.jpg",
    "haaland2.jpg",
    "haaland3.jpg",
    "final.jpg"
];

imageFiles.forEach(file => {

    const img =
        new Image();

    img.src = file;

});


/* =========================================
   INITIALIZE
========================================= */

showScene(0);