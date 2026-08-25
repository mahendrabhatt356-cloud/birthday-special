/* =========================
   ELEMENTS
========================= */

const openBtn = document.getElementById("openBtn");
const messageScreen = document.getElementById("messageScreen");
const continueBtn = document.getElementById("continueBtn");

const specialScreen = document.getElementById("specialScreen");
const memoryBtn = document.getElementById("memoryBtn");

const timelineScreen = document.getElementById("timelineScreen");
const voiceBtn = document.getElementById("voiceBtn");

const voiceScreen = document.getElementById("voiceScreen");

const birthdayAudio = document.getElementById("birthdayAudio");
const playBtn = document.getElementById("playBtn");
const progress = document.getElementById("progress");
const currentTime = document.getElementById("currentTime");
const duration = document.getElementById("duration");

const finalBtn = document.getElementById("finalBtn");


/* =========================
   OPEN SURPRISE
========================= */

if (openBtn && messageScreen) {

    openBtn.addEventListener("click", () => {

        openBtn.disabled = true;

        openBtn.innerHTML =
            "Opening your surprise... ✨";

        setTimeout(() => {

            messageScreen.classList.add("show");

        }, 700);

    });

}


/* =========================
   MESSAGE → SPECIAL
========================= */

if (continueBtn && specialScreen) {

    continueBtn.addEventListener("click", () => {

        continueBtn.disabled = true;

        continueBtn.innerHTML =
            "Opening... ✨";

        setTimeout(() => {

            specialScreen.classList.add("show");

        }, 500);

    });

}


/* =========================
   SPECIAL → TIMELINE
========================= */

if (memoryBtn && timelineScreen) {

    memoryBtn.addEventListener("click", () => {

        memoryBtn.disabled = true;

        memoryBtn.innerHTML =
            "Opening memories... ✨";

        setTimeout(() => {

            timelineScreen.classList.add("show");

        }, 500);

    });

}


/* =========================
   TIMELINE → VOICE
========================= */

if (voiceBtn && voiceScreen) {

    voiceBtn.addEventListener("click", () => {

        voiceBtn.disabled = true;

        voiceBtn.innerHTML =
            "Opening your message... 🎧";

        setTimeout(() => {

            voiceScreen.classList.add("show");

        }, 500);

    });

}


/* =========================
   AUDIO PLAY / PAUSE
========================= */

if (playBtn && birthdayAudio) {

    playBtn.addEventListener("click", () => {

        if (birthdayAudio.paused) {

            birthdayAudio.play()
                .then(() => {

                    playBtn.innerHTML = "❚❚";

                })
                .catch(() => {

                    playBtn.innerHTML = "▶";

                    alert(
                        "Audio file nahi mila. birthday-message.mp3 ko website folder mein add karo."
                    );

                });

        } else {

            birthdayAudio.pause();

            playBtn.innerHTML = "▶";

        }

    });

}


/* =========================
   AUDIO PROGRESS
========================= */

if (birthdayAudio) {

    birthdayAudio.addEventListener(
        "timeupdate",
        () => {

            if (!birthdayAudio.duration) return;

            const percent =
                (birthdayAudio.currentTime /
                birthdayAudio.duration) * 100;

            if (progress) {

                progress.style.width =
                    percent + "%";

            }

            if (currentTime) {

                currentTime.innerHTML =
                    formatTime(
                        birthdayAudio.currentTime
                    );

            }

        }
    );


    /* =========================
       AUDIO DURATION
    ========================= */

    birthdayAudio.addEventListener(
        "loadedmetadata",
        () => {

            if (duration) {

                duration.innerHTML =
                    formatTime(
                        birthdayAudio.duration
                    );

            }

        }
    );


    /* =========================
       AUDIO END
    ========================= */

    birthdayAudio.addEventListener(
        "ended",
        () => {

            if (playBtn) {
                playBtn.innerHTML = "▶";
            }

            if (progress) {
                progress.style.width = "0%";
            }

        }
    );

}


/* =========================
   TIME FORMAT
========================= */

function formatTime(seconds) {

    if (!seconds || isNaN(seconds)) {

        return "0:00";

    }

    const minutes =
        Math.floor(seconds / 60);

    const remainingSeconds =
        Math.floor(seconds % 60);

    return (
        minutes +
        ":" +
        String(remainingSeconds).padStart(2, "0")
    );

}



/* =========================
   FINAL SCREEN
========================= */

const finalScreen =
    document.getElementById("finalScreen");

const replayBtn =
    document.getElementById("replayBtn");


if (finalBtn && finalScreen) {

    finalBtn.addEventListener("click", () => {

        finalBtn.disabled = true;

        finalBtn.innerHTML =
            "Revealing... ✦";

        setTimeout(() => {

            finalScreen.classList.add("show");

        }, 800);

    });

}


/* =========================
   REPLAY
========================= */

if (replayBtn) {

    replayBtn.addEventListener("click", () => {

        location.reload();

    });

}
 