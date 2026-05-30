// Open Surprise Button
function showSurprise() {
    const surprise = document.getElementById("surprise");

    if (surprise) {
        surprise.style.display = "block";
    }
}

// Confetti Function
function birthdaySurprise() {

    if (typeof confetti === "function") {

        confetti({
            particleCount: 300,
            spread: 180,
            origin: { y: 0.6 }
        });

        setTimeout(() => {
            confetti({
                particleCount: 200,
                spread: 120
            });
        }, 800);

    }
}

// Countdown already completed
window.onload = function () {

    const countdown =
        document.getElementById("countdown");

    if (countdown) {

        countdown.innerHTML =
        "🎉 HAPPY BIRTHDAY MERA MONKEY ❤️🎂";

    }

    birthdaySurprise();
};

// Reasons
const reasons = [
    "Your smile ❤️",
    "Your laugh ❤️",
    "Your eyes ❤️",
    "Your kindness ❤️",
    "Your support ❤️",
    "Your hugs ❤️",
    "Your voice ❤️",
    "Your honesty ❤️",
    "Your patience ❤️",
    "You make every day better ❤️"
];

let current = 0;

function showReason() {

    const reason =
        document.getElementById("reason");

    if (!reason) return;

    if (current < reasons.length) {

        reason.innerHTML =
        `❤️ ${current + 1}. ${reasons[current]}`;

        current++;

    } else {

        reason.innerHTML =
        "❤️ There are countless more reasons why I love you ❤️";

    }
}
