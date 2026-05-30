// Surprise Section
function showSurprise() {
    document.getElementById("surprise").style.display = "block";
}

// Countdown to Midnight
const now = new Date();

const birthday = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1, // tomorrow
    0, 0, 0, 0        // 12:00 AM
).getTime();

function updateCountdown() {

    const countdown = document.getElementById("countdown");

    const currentTime = new Date().getTime();
    const distance = birthday - currentTime;

    if (distance <= 0) {

        countdown.innerHTML =
            "🎉 HAPPY BIRTHDAY MERA MONKEY ❤️🎂";

        birthdaySurprise();

        return;
    }

    const hours = Math.floor(
        distance / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );

    countdown.innerHTML =
        `${hours}h ${minutes}m ${seconds}s`;
}

updateCountdown();
setInterval(updateCountdown, 1000);

// Confetti Burst
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
        }, 1000);
    }
}

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

    const reasonElement =
        document.getElementById("reason");

    if (current < reasons.length) {

        reasonElement.innerHTML =
            `❤️ ${current + 1}. ${reasons[current]}`;

        current++;

    } else {

        reasonElement.innerHTML =
            "❤️ There are countless more reasons why I love you ❤️";
    }
}
