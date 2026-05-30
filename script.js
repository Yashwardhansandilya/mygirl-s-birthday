function showSurprise() {
    document.getElementById("surprise").style.display = "block";
}

// Countdown
const birthday = new Date().getTime() + ((1 * 60 + 18) * 60 * 1000);

function updateCountdown() {

    const countdown = document.getElementById("countdown");

    if (!countdown) return;

    const now = new Date().getTime();
    const distance = birthday - now;

    if (distance <= 0) {
        countdown.innerHTML = "🎉 Happy Birthday My Love ❤️";
        birthdaySurprise();
        return;
    }

    const hours = Math.floor(distance / (1000 * 60 * 60));
    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor(
        (distance % (1000 * 60)) / 1000
    );

    countdown.innerHTML =
        `${hours}h ${minutes}m ${seconds}s`;
}

updateCountdown();
setInterval(updateCountdown, 1000);

// Confetti
function birthdaySurprise() {
    if (typeof confetti === "function") {
        confetti({
            particleCount: 250,
            spread: 180,
            origin: { y: 0.6 }
        });
    }
}

// Reasons
const reasons = [
    "Your smile ❤️",
    "Your laugh ❤️",
    "Your kindness ❤️",
    "Your support ❤️",
    "Your eyes ❤️",
    "Your honesty ❤️",
    "Your hugs ❤️",
    "Your voice ❤️",
    "Your patience ❤️",
    "Everything about you ❤️"
];

let current = 0;

function showReason() {

    const reason = document.getElementById("reason");

    if (current < reasons.length) {

        reason.innerHTML =
            `❤️ ${current + 1}. ${reasons[current]}`;

        current++;

    } else {

        reason.innerHTML =
            "❤️ Infinite reasons remain ❤️";
    }
}
